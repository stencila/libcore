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
        // Translate arguments to Javascript call semantics
        if (!func.pars) {
          // Function does not have a `pars` property specifying parameters, so 
          // just unpack all arguments
          let args = []
          if (operation.args) {
            for (let arg of operation.args) args.push(execute(arg, scope))
          }
          let namedArgs = {}
          if (operation.namedArgs) {
            for (let name of Object.keys(operation.namedArgs)) namedArgs[name] = execute(operation.namedArgs[name], scope)
          }
          return func(...args, namedArgs)
        }
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
      break;
    }
    default:
      return operation
  }
}
