import assert from './assert'
import is_boolean from './is_boolean'

/**
* @title Not
* @summary Logically invert an expression. (Logical negation)
*
* @description
*
* If `value` is `true` then return `false`, and if `false` then return
* `true`. The exclamation operator `!` is an alias for `not` e.g. `!(x>0)` is equivalent to `not(x>0)`.
*
* @param {boolean} value The value to be negated.
* @return {boolean} The logical inverse.
*
* @implem js
* @author Nokome Bentley
* @example not(x > 4)
* @example <caption>Example usage of not function.</caption>
* // returns False
* not(True)
*
*/

export default function not (value) {
  assert(is_boolean(value), 'parameter `value` must be a boolean')
  return !value
}
