const fs = require('fs')
const glob = require('glob')
const mkdirp = require('mkdirp')
const xmldom = require('xmldom')
const xpath = require('xpath.js')

mkdirp('build', function (err) {
  if (err) throw err

  // For checking that the same function name is not used twice
  let names = {}

  // The compiled XML function definitions
  let vfs = fs.createWriteStream('build/funcs.js')
  vfs.write('window.STENCILA_LIB_FUNCTIONS = {\n')

  // For each function...
  glob('../xml/*.fun.xml', function (err, files) {
    if (err) throw err

    files.forEach(function(path) {
      if (path.substring(7,8) === '.') return

      console.info(path)
      fs.readFile(path, 'utf8', function(err, xml) {
        if (err) throw err

        const doc = new xmldom.DOMParser().parseFromString(xml)
        
        // Check that the function name has not already been used
        const name = xpath(doc, '/function/name/text()')[0].data
        if (names[name]) throw new Error(`Function name already used: "${name}"`)
        else names[name] = true

        // Get parameter types for the signature
        paramTypes = xpath(doc, '/function/params/param/@type').map(function (attr) {return attr.value})

        // Find any Javascript implementations
        xpath(doc, '/function/implems/implem[@language="js"]').forEach(function (implem) {
          let types = xpath(implem, './types/type/@type').map(function (attr) {return attr.value})
          if (!types.length) types = paramTypes
          const signat = ([name].concat(types)).join('_').replace('[', '_').replace(']', '')
        })

        // Write a compacted version of XML to the definitions file
        const xmlCompact = xml.replace(/>\s*</g,'><').replace(/'/g,"\\'").trim()
        vfs.write(`  ${name}: '${xmlCompact}',\n`)
      })
    })
  })

  process.on('exit', function() {
    vfs.write('}\n')
  })

})
