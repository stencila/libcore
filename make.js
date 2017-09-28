const fs = require('fs')
const glob = require('glob')
const mkdirp = require('mkdirp')
const xmldom = require('xmldom')
const xpath = require('xpath.js')
const zlib = require('zlib')

mkdirp('build/js', function (err) {
  if (err) throw err

  // For checking that the same function name is not used twice
  let names = {}

  // The compiled XML function definitions
  let vfs = fs.createWriteStream('build/funcs.js')
  vfs.write('window.STENCILA_LIB_FUNCTIONS = {\n')

  // The compiled module of JavaScript Function implementations
  let lib = fs.createWriteStream('build/js/lib.js')

  // The compiled set of tests
  let tests = fs.createWriteStream('build/js/tests.js')
  tests.write('const lib = require("lib")\nconst test = require("tape")\n\ntest("all", function(assert) {\n\n')

  // For each function...
  glob('**/*.fun.xml', function (err, files) {
    if (err) throw err

    files.forEach(function(path) {
      if (path.substring(0,1) === '.') return

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

        // Extract any Javascript implementations for the compiled module
        xpath(doc, '/function/implems/implem[@language="js"]').forEach(function (implem) {
          let types = xpath(implem, './types/type/@type').map(function (attr) {return attr.value})
          if (!types.length) types = paramTypes
          const signat = ([name].concat(types)).join('_').replace('[', '_').replace(']', '')
          const code = xpath(implem, './code/text()')[0].data

          lib.write(`var ${signat} = (${code})\n\n`)
        })

        // Create any tests
        xpath(doc, '/function/tests/test').forEach(function (test) {
          const args = xpath(test, './args/arg').map(function (arg) {
            let json = xpath(arg, './text()')[0].data
            return json
          })
          const result = xpath(test, './result/text()')[0].data

          tests.write(`assert.deepEqual(lib.${name}(${args.join(',')}),${result})\n\n`)
        })
        
        // Write a compacted version of XML to the definitions file
        const xmlCompact = xml.replace(/>\s*</g,'><').replace(/'/g,"\\'").trim()
        vfs.write(`  ${name}: '${xmlCompact}',\n`)
      })
    })
  })

  process.on('exit', function() {
    vfs.write('}\n')
    tests.write('\n})\n')
  })

})
