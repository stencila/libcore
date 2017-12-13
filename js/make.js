let b = require('substance-bundler')
let fork = require('substance-bundler/extensions/fork')
let fs = require('fs')
let cp = require('child_process')
let concatFiles = require('concat-files')
let path = require('path')
let { DefaultDOMElement } = require('substance')
const { FunctionJsDocConverter } = require('stencila-convert')

const LIB_NAME = 'stencila-libcore'
const LIB_XML = `build/${LIB_NAME}.xml`
const LIB_JS = `build/${LIB_NAME}.js`
const LIB_CJS = `build/${LIB_NAME}.cjs.js`
const LIB_ALL_JS = `build/${LIB_NAME}.all.js`
const LIB_TEST_JS = 'tmp/test.umd.js'
const LIB_TEST_CJS = 'tmp/test.cjs.js'
const LIB_TEST_COVER = 'tmp/test.cover.js'

const LIB_XML_TEMPLATE = `
<!DOCTYPE function PUBLIC "StencilaFunctionLibrary 1.0" "StencilaFunctionLibrary.dtd">
<library name="${LIB_NAME}">
FUNCTIONS
</library>
`
const EXTERNALS = ['jstat', '@stdlib/stdlib']
const GLOBALS = {
  'jstat': 'jStat',
  '@stdlib/stdlib': 'stdlib'
}

b.task('default', ['clean', 'build'])

b.task('clean', () => {
  b.rm('build')
  b.rm('tmp')
})

b.task('build', ['defs', 'lib', 'concat'])

b.task('defs', () => {
  b.custom('Creating library definitions...', {
    src: [
      '../defs/*.fun.txt',
      '../defs/*.fun.xml'
    ],
    dest: LIB_XML,
    execute(files) {
      let xmlPromises = []
      files.forEach((file) => {
        const data = fs.readFileSync(file, 'utf-8')
        let xmlPromise
        if (file.slice(-4) === '.txt') {
          xmlPromise = (new FunctionJsDocConverter).load(data)
        } else {
          xmlPromise = Promise.resolve(data)
        }
        xmlPromises.push(xmlPromise)
      })
      return Promise.all(xmlPromises).then((xmls) => {
        const funs = xmls.map((xml) => {
          const dom = DefaultDOMElement.parseXML(xml)
          return dom.find('function').serialize()
        })
        let xmlStr = LIB_XML_TEMPLATE.replace('FUNCTIONS', funs.join('\n'))
        b.writeSync(LIB_XML, xmlStr, 'utf8')
        b.writeSync(LIB_XML + '.js', 'window.STENCILA_LIBCORE = ' + JSON.stringify(xmlStr), 'utf8')
      })
    }
  })
})

b.task('docs', () => {
  b.custom('Creating library documentation...', {
    src: [
      '../defs/*.fun.txt',
      '../defs/*.fun.xml'
    ],
    dest: '../docs/',
    execute(files) {
      const promises = files.map((file) => {
        const data = fs.readFileSync(file, 'utf-8')
        let xmlPromise
        if (file.slice(-4) === '.txt') xmlPromise = (new FunctionJsDocConverter).load(data)
        else xmlPromise = Promise.resolve(data)
        return xmlPromise.then((xml) => {
          const dom = DefaultDOMElement.parseXML(xml)
          const func = dom.find('function')
          const name = func.find('name').text()
          
          function get (elem, selector) {
            const el = elem.find(selector)
            return (el ? el.text() : '')
          }

          let md = '<!--- Generated documentation. Do not edit! -->\n\n'

          md += `# \`${name}\``
          let summary = func.find('summary')
          if (summary) md += ' : ' + summary.text()
          md += '\n\n'

          let params = dom.findAll('params param')
          if (params.length) {
            md += `### Parameters\n\n`
            md += `Name | Type | Default | Description\n`
            md += `---- | ---- | ------- | -----------\n`
            params.forEach((param) => {
              md += `\`${param.attr('name')}\` | ${param.attr('type')} | `
              let defaulto = param.find('default')
              if (defaulto) md += `\`${defaulto.text()}\` | `
              else md += ' |'
              md += get(param,'description') + '\n'
            })
            md += '\n\n'
          }

          md += `### Description\n\n`
          md += `${get(func, 'description')}\n\n`

          let examples = dom.findAll('examples example')
          if (examples.length) {
            md += `### Examples\n\n`
            examples.forEach((example) => {
              md += `${get(example, 'description')}\n`
              md += '```mini\n' + get(example, 'usage') + '\n```\n\n'
            })
          }

          let defPath = path.relative(path.join(__dirname, '..'), file)
          md += '<p class="tools">\n'
          md += `  <a class="edit button" href="https://github.com/stencila/libcore/edit/master/${defPath}" target="_blank">Improve the docs 🖉</a>\n`
          md += `  <a class="code button" href="https://github.com/stencila/libcore/blob/master/js/src/${name}.js" target="_blank">See the code 👁</a>\n`
          md += '</p>\n'

          b.writeSync(`../docs/functions/${name}.md`, md, 'utf8')
          return name
        })
      })
      return Promise.all(promises).then((funcs) => {
        let sidebar = ''
        let lines = fs.readFileSync('../docs/sidebar.md', 'utf8').split('\n')
        for (let line of lines) {
          sidebar += line + '\n'
          if (line === '- Functions') break
        }
        funcs.sort().forEach((func) => {
          sidebar += `  - [${func}](functions/${func}.md)\n`
        })
        b.writeSync('../docs/sidebar.md', sidebar, 'utf8')
      })
    }
  })
})

b.task('lib', () => {
  b.js('./src/index.js', {
    targets: [{
      dest: LIB_JS,
      format: 'umd',
      moduleName: 'stencilaLibCore',
    }, {
      dest: LIB_CJS,
      format: 'cjs'
    }],
    external: EXTERNALS,
    globals: GLOBALS,
    json: true
  })
})

b.task('concat', ['lib'], () => {
  b.custom('Concatenating files...', {
    execute: () => {
      return new Promise((resolve, reject) => {
        concatFiles([
          './node_modules/jstat/dist/jstat.min.js',
          './node_modules/@stdlib/stdlib/dist/stdlib-tree.min.js',
          LIB_JS
        ], LIB_ALL_JS, function(err) {
          if (err) throw reject(err)
          resolve()
        })
      })
    }
  })
})

b.task('test', () => {
  b.js('./test/*.js', {
    target: {
      dest: LIB_TEST_CJS,
      format: 'cjs'
    },
    external: EXTERNALS.concat(['tape']),
    json: true
  })
  b.custom('Running tests...', {
    execute: () => {
      return new Promise((resolve, reject) => {
        // execute the bundle and process the output using tap-spec
        const testFile = require.resolve('./tmp/test.cjs.js')
        const tapSpecFile = require.resolve('tap-spec/bin/cmd.js')
        let test = cp.fork(testFile, {
          stdio: ['ignore', 'pipe', 2, 'ipc']
        })
        let tapeSpec = cp.fork(tapSpecFile, {
          stdio: ['pipe', 1, 2, 'ipc']
        })
        test.on('error', (error) => {
          console.error(error)
          reject()
        })
        tapeSpec.on('close', () => {
          resolve()
        })
        test.stdout.pipe(tapeSpec.stdin)
      })
    }
  })
})

b.task('cover', () => {
  b.js(['./src/index.js', './test/index.js'], {
    target: {
      dest: LIB_TEST_COVER,
      format: 'cjs',
      istanbul: {
        include: ['./src/**/*.js'],
        exclude: ['./test/**/*.js']
      },
    },
    external: EXTERNALS.concat(['tape']),
    json: true
  })
  fork(b, 'node_modules/.bin/istanbul', 'cover ' + LIB_TEST_COVER)
})

b.task('test:browser', () => {
  if (!fs.existsSync('./tmp/tape.umd.js')) {
    b.browserify('./node_modules/tape', {
      dest: 'tmp/tape.umd.js',
      browserify: {
        standalone: 'tape'
      }
    })
  }
  b.js('./test/*.js', {
    target: {
      dest: LIB_TEST_JS,
      format: 'umd',
      moduleName: 'tests',
    },
    external: EXTERNALS.concat(['tape']),
    globals: Object.assign({}, GLOBALS, {
      'tape': 'tape'
    }),
    json: true
  })
})
