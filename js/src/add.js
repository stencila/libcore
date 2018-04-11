import append from './append'
import extend from './extend'
import is_array from './is_array'
import is_number from './is_number'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import type from './type'

/**
@title add
@summary Addition of two values

@description 

Returns the addition of two values. The plus sign, `+`, is used as an alias for `add` e.g. `x + y` is equivalent to `add(x, y)`.

@param {any} value The number
@param {any} other The other number
@return {any} Result of addition

@example add(x, y)
@example x + y
 */
export default function add(value, other) {
  if (is_number(value) && is_number(other)) return value + other
  if (is_string(value) && is_string(other)) return value + other
  if (is_array(value)) return append(value, other)
  if (is_object(value) && is_object(other)) return extend(value, other)
  if (is_table(value) && is_table(other)) return append(value, other)
  throw new Error(`cannot add a "${type(value)}" and a "${type(other)}"`)
}
