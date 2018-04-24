import assert from './assert'
import is_number from './is_number'


/**
* @name negative
* @title negative
* @summary Return the negative of the value
*
* @description
*
* Returns the negative of the value. The unary negation, `-` operator is an alias for `negative` e.g. `-x` is equivalent to `negative(x)`.
*
* @related postive
* @param {number} value The value
* @return {number} The negative of the value
*
* @example negative(x)
* @example <caption>Example usage of negative function.</caption>
* // returns -2
* negative(2)
*
*
* @implem js
*
* @author Nokome Bentley
*/

export default function negative(value) {
  assert(is_number(value), 'parameter `value` must be a number')
  return -value
}
