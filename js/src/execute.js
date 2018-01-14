import * as functions from './index'

let globals = {}

export default function execute (operation, scope = globals) {
  if (operation === null) return null
  switch (operation.type) {
    case 'set':
      // Set a variable
      scope[operation.name] = operation.value
      break
    case 'get':
      // Get a variable
      return scope[operation.name] || functions[operation.name]
    case 'call': {
      // Get the function
      const func = execute(operation.func, scope)
      if (typeof func === 'function') {
        // A native function
        if (!func.pars) {
          // If the function does not have the `pars` property then define it
          // by parsing its source
          const source = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '')
          const pars = source.match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].split(/\s*,\s*/)
          let specs = []
          for (let par of pars) {
            if (par.length === 0) continue
            const match = par.match(/^((\.\.\.)|(___))?(\w+)(\s*=.+)?/)
            if (!match) throw new Error('Could not match par string: ' + par)
            let spec = {name: match[4]}
            if (match[2]) spec.repeats = true
            if (match[3]) spec.namedRepeats = true
            if (match[5]) spec.default = true
            specs.push(spec)
          }
          func.pars = specs
        }
        // Using `func.pars` specification, map the call's arguments onto the function's parameters
        let args = []
        let argsIndex = 0
        let argsUsed = 0
        let namedArgs
        let namedArgsUsed = []
        for (let par of func.pars) {
          if (par.repeats) {
            // Put the remaining arguments into an array
            let remaining = []
            for (; argsIndex < operation.args.length; argsIndex++) {
              remaining.push(execute(operation.args[argsIndex], scope))
              argsUsed++
            }
            args.push(remaining)
            break
          } else if (par.namedRepeats) {
            // Put the remaining named arguments into an object
            if (operation.namedArgs) {
              namedArgs = {}
              for (let name of Object.keys(operation.namedArgs)) {
                if (namedArgsUsed.indexOf(name) < 0) {
                  namedArgs[name] = execute(operation.namedArgs[name], scope)
                  namedArgsUsed.push(par.name)
                }
              }
            }
            break
          } else {
            // Get the argument for the parameter either by name or by index
            let arg
            if (operation.namedArgs) {
              arg = operation.namedArgs[par.name]
              if (arg) namedArgsUsed.push(par.name)
            }
            if (!arg && operation.args) {
              arg = operation.args[argsIndex]
              if (arg) argsUsed++
            }
            if (!arg && !par.default) {
              throw new Error (`Function parameter "${par.name}" must be supplied`)
            }
            if (arg) args.push(execute(arg, scope))
            else args.push(undefined)
          }
          argsIndex++
        }
        // Check that there are no extra, unused arguments in call
        if (operation.args && argsUsed < operation.args.length) {
          const extra = operation.args.length - argsUsed
          throw new Error(`Function was supplied ${extra} extra arguments`)
        }
        if (operation.namedArgs && namedArgsUsed.length < Object.keys(operation.namedArgs).length) {
          const extra = Object.keys(operation.namedArgs).filter((arg) => namedArgsUsed.indexOf(arg) < 0)
                                                        .map((arg) => `"${arg}"`)
                                                        .join(', ')
          throw new Error(`Function was supplied extra named arguments ${extra}`)
        }
        // Return the actual function call
        return namedArgs ? func(...args, namedArgs) : func(...args)
      } else if (func.type === 'function') {
        // A function operation
        let locals = {}
        // Map arguments into parameter names
        if (func.pars) {
          let index = 0
          for (let par of func.pars) {
            locals[par.name] = operation.args[index++]
          }
        }
        // Add `this` if defined
        if (operation.this) {
          locals['this'] = operation.this
        }
        // Execute each operation in the function body, returning the last
        let last
        for (let operation of func.body) {
          last = execute(operation, locals)
        }
        return last
      } else {
        throw new Error('Not a function: ' + func)
      }
    }
    default:
      return operation
  }
}
