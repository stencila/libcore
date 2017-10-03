let b = require('substance-bundler')
let { DefaultDOMElement } = require('substance')

// EXPERIMENTAL bundling for the proposed approach exposing
// a library instead of single functions
let fs = require('fs')

const LIB_NAME = 'stencila-mini-core'
const LIB_XML = 'build/stencila-mini-core.xml'
const LIB_JS = 'build/stencila-mini-core.js'
const LIB_CJS = 'build/stencila-mini-core.cjs.js'

const LIB_XML_TEMPLATE = `
<!DOCTYPE function PUBLIC "StencilaFunctionLibrary 1.0" "StencilaFunctionLibrary.dtd">
<library name="${LIB_NAME}">
FUNCTIONS
</library>
`
// PRELIMINARY: packaging everything into a JSON file
const LIB_XML_JS = 'build/stencila-mini-core.xml.js'

b.task('libxml', () => {
  _bundleLibraryXML()
})

b.task('libjs', () => {
  b.js('./src/index.js', {
    targets: [{
      dest: LIB_JS,
      format: 'umd',
      moduleName: 'stencilaMiniCore',
    }, {
      dest: LIB_CJS,
      format: 'cjs'
    }],
    external: ['jstat', '@stdlib/stdlib', 'd3'],
    globals: {
      'jstat': 'jStat',
      '@stdlib/stdlib': 'stdlib',
      'd3': 'd3'
    },
    json: true
  })
})

b.task('clean', () => {
  b.rm('build')
})

b.task('bundle', ['libxml', 'libjs'])

b.task('default', ['clean', 'bundle'])

// pull all function XML files into one library XML file
function _bundleLibraryXML() {
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
      b.writeSync(LIB_XML_JS, 'window.STENCILA_MINI_CORE_LIBRARY = ' + JSON.stringify(xmlStr), 'utf8')
    }
  })
}
