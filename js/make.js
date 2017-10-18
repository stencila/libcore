let b = require('substance-bundler')
let fork = require('substance-bundler/extensions/fork')
let fs = require('fs')
let cp = require('child_process')
let concatFiles = require('concat-files')
let { DefaultDOMElement } = require('substance')
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

b.task('build', ['xml', 'lib', 'concat'])

b.task('xml', () => {
  b.custom('Creating library XML...', {
    src: '../xml/*.fun.xml',
    dest: LIB_XML,
    execute(files) {
      let funs = []
      files.forEach((f) => {
        let xml = fs.readFileSync(f, 'utf-8')
        const doc = DefaultDOMElement.parseXML(xml)
        let fun = doc.find('function')
        funs.push(fun.serialize())
      })
      let xmlStr = LIB_XML_TEMPLATE.replace('FUNCTIONS', funs.join('\n'))
      b.writeSync(LIB_XML, xmlStr, 'utf8')
      b.writeSync(LIB_XML+'.js', 'window.STENCILA_LIBCORE = ' + JSON.stringify(xmlStr), 'utf8')
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
          './node_modules/@stdlib/stdlib/dist/stdlib-tree.min.js'
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
