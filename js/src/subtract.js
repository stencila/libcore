import assert from './assert'
import is_number from './is_number'

/**
* @title subtract
* @name subtract
* @summary  Subtraction of two values.
*
* @description
*
* Returns the subtraction of two values. The minus sign, `-`, is used as an alias for `subtract` e.g. `x - y` is equivalent to `subtract(x, y)`.
*
* @param {number} value The number.
* @param {number} other The other number.
* @return {number} Result of subtraction.
*
* @implem js
*
* @example subtract(value, other)
* @example <caption>Example usage of subtract function.</caption>
* // returns 5
* subtract(10,5)
*
* @author Nokome Bentley
*
*/

export default function subtract(value, other) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(other), 'parameter `other` must be a number')
  return value - other
}
