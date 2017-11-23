import select from './select'
import * as functions from './index'

export default function evaluate (expression, scope) {
  let func
  let args
  switch (expression.type) {
    case 'symbol':
      if (expression.name === '.') return scope
      else return select(scope, expression.name)
    case 'call':
      func = functions[expression.name]
      if (!func) throw new Error(`Unknown function "${expression.name}"`)
      args = expression.args.map(function (arg) {
        return evaluate(arg, scope)
      })
      return func(...args)
    default:
      return expression
  }
}
