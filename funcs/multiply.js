import assert from './assert'
import is_number from './is_number'

/**
* @title multiply
* @name multiply
*
* @summary Multiply two numbers
*
* @description
*
* Multiply two numbers. The asterisk, `*`, is used as an alias for `multiply`
* e.g. `x * y` is equivalent to `multiply(x, y)`.
*
* @param {number} value The value to be multiplied.
* @param {number} other The multiplier.
* @return {number} Muliplication result.
*
* @example multiply(x, y)
* @example <caption>Example usage of multiply function.</caption>
* // return 6
* 2 * 3
*
*
* @implem js
* @author Nokome Bentley
*/

export default function multiply (value, other) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(other), 'parameter `other` must be a number')
  return value * other
}
