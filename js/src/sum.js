import type from './type'

export default function sum(...values) {
  let result = 0
  for (let value of values) {
    switch (type(value)) {
      case 'number':
      case 'integer':
        result += value
        break
      case 'array[number]':
      case 'array[integer]':
        for (let item of value) result += item
        break
      default:
        throw new Error('Unhandled argument type "' + type(value) + '"')
    }
  }
  return result
}
sum.pars = ['...values']
