import assert from './assert'
import is_number from './is_number'

/**
* @title positive
* @name positive
* @summary Completeness as the antonym of the `negative` function.
*
* @description
*
* This function does nothing but is provided for completeness as the antonym of
* the `negative` function and to support the plus operator `* `. The `* ` operator
* is an alias for `positive` e.g. `* x` is equivalent to `positive(x)`, which is equivalent to `x`.
*
* @param {number} value The tested value
* @return {number}
*
* @related negative
* @implem js
* @author Nokome Bentley
*
* @example positive(value)
* @example <caption>Example usage of positive function.</caption>
* // returns +2
* positive(2)
*
*/

export default function positive(value) {
  assert(is_number(value), 'parameter `value` must be a number')
  return value
}
