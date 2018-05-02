import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'
import type from './type'

export default function _reduce (accumulator, update, use, ...values) {
  for (let value of values) {
    if (use(value)) {
      accumulator = update(accumulator, value)
    } else if (is_table(value)) {
      accumulator = _reduce(accumulator, update, use, ...Object.values(value.data))
    } else if (is_array(value)) {
      accumulator = _reduce(accumulator, update, use, ...value)
    } else if (is_object(value)) {
      accumulator = _reduce(accumulator, update, use, ...Object.values(value))
    } else {
      throw new Error(`Unhandled argument type "${type(value)}"`)
    }
  }
  return accumulator
}
