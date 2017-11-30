import append from './append'
import prepend from './prepend'
import is_array from './is_array'
import is_number from './is_number'
import is_string from './is_string'
import type from './type'

export default function add(value, other) {
  if (is_number(value) && is_number(other)) return value + other
  if (is_string(value) && is_string(other)) return value + other
  if (is_array(value)) return append(value, other)
  if (is_array(other)) return prepend(other, value)
  throw new Error(`cannot add a "${type(value)}" and a "${type(other)}"`)
}
