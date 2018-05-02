import append from './append'
import extend from './extend'
import is_array from './is_array'
import is_number from './is_number'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import type from './type'

/**
* @summary Addition of two values.
*
* @description
*
* Returns the addition of two values. The plus sign, `+`, is used as an alias for `add` e.g. `x + y` is equivalent to `add(x, y)`.
* Both values have to be of the same type: number, string, array, table or object. If the values are array, table or object, the function
* will use either extend or append to add the values.
*
* @param {number|string|array|table|object} value The value to have other value added.
* @param {number|string|array|table|object} other The other value.
* @returns {number|string|array|table|object} Result of addition.
*
* @example
* // returns 6
* add(2, 4)
*
* @example
* // returns [1, 2, 3, 4]
* add([1,2], [3,4])
*/

export default function add (value, other) {
  if (is_number(value) && is_number(other)) return value + other
  if (is_string(value) && is_string(other)) return value + other
  if (is_array(value)) return append(value, other)
  if (is_object(value) && is_object(other)) return extend(value, other)
  if (is_table(value) && is_table(other)) return append(value, other)
  throw new Error(`cannot add a "${type(value)}" and a "${type(other)}"`)
}
