let b = require('substance-bundler')
let { DefaultDOMElement } = require('substance')

// EXPERIMENTAL bundling for the proposed approach exposing
// a library instead of single functions
let fs = require('fs')

b.task('libxml', () => {
  _bundleLibraryXML()
})

b.task('libjs', () => {
  b.js('./src/index.js', {
    dest: './build/minicore.js',
    format: 'umd',
    moduleName: 'minicore',
    external: ['jstat', '@stdlib/stdlib', 'd3'],
    globals: {
      'jstat': 'jStat',
      '@stdlib/stdlib': 'stdlib',
      'd3': 'd3'
    },
    json: true
  })
})


b.task('bundle', ['libxml', 'libjs'], () => {
  _bundle()
})

b.task('default', ['bundle'])



const LIB_NAME = 'core'
const LIB_XML = 'build/minicore.xml'
const LIB_JS = 'build/minicore.js'

const LIB_XML_TEMPLATE = `
<!DOCTYPE function PUBLIC "StencilaFunctionLibrary 1.0" "StencilaFunctionLibrary.dtd">
<library name="${LIB_NAME}">
FUNCTIONS
</library>
`
// PRELIMINARY: packaging everything into a JSON file
const OUT = 'build/minicore.vfs.js'

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
      b.writeSync(LIB_XML, LIB_XML_TEMPLATE.replace('FUNCTIONS', funs.join('\n')), 'utf8')
    }
  })
}

function _bundle() {
  b.custom('Creating library XML...', {
    src: [LIB_XML, LIB_JS],
    dest: OUT,
    execute() {
      let lib = {}
      ;[LIB_XML, LIB_JS].forEach((f) => {
        let content = fs.readFileSync(f, 'utf-8')
        if (f === LIB_XML) {
          lib.xml = content
        } else if (f === LIB_JS) {
          lib.js = content
        }
      })
      b.writeSync(OUT, 'window.MINI_CORE_LIBRARY = ' + JSON.stringify(lib, 0, 2), 'utf8')
    }
  })
}