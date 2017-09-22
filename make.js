const fs = require('fs')
const glob = require('glob')
const mkdirp = require('mkdirp')
const xmldom = require('xmldom')
const xpath = require('xpath.js')
const zlib = require('zlib')

mkdirp('build', function (err) {
  if (err) throw err

  // For checking that the same function name is not used twice
  let names = {}

  // The compiled XML function definitions
  let vfs = fs.createWriteStream('build/funcs.js')
  vfs.write('window.STENCILA_LIB_FUNCTIONS = {\n')

  // The compiled module of JavaScript Function implementations
  let lib = fs.createWriteStream('build/lib.js')

  glob('**/*.fun.xml', function (err, files) {
    if (err) throw err

    files.forEach(function(path) {
      console.info(path)
      fs.readFile(path, 'utf8', function(err, xml) {
        if (err) throw err

        const doc = new xmldom.DOMParser().parseFromString(xml)
        const name = xpath(doc, '/function/name/text()')[0].data
        if (names[name]) throw new Error(`Function name already used: "${name}"`)
        else names[name] = true
          
        xpath(doc, '/function/implems/implem[@language="js"]').forEach(function (implem) {
          const types = xpath(implem, './types/type/@type')
          const signat = (['mini', name].concat(types)).join('_')
          const code = xpath(implem, './code/text()')[0].data

          lib.write(`var ${signat} = (${code})\n\n`)
        })
        
        const xmlCompact = xml.replace(/>\s*</g,'><').replace(/'/g,"\\'").trim()
        vfs.write(`  ${name}: '${xmlCompact}',\n`)
      })
    })
  })

  process.on('exit', function() {
    vfs.write('}\n')
  })

})
