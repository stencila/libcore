import assert from './assert'
import is_number from './is_number'

+/**
+@title power
+@summary Check if given value is within range.
+
+@description
+
+Returns the value raised to the power. The caret character, `^`, is used as
+an alias for `pow` e.g. `x ^ y` is equivalent to `pow(x, y)`.
+
+@param {number} value Base value to be raised
+@param {number} exponent Exponent
+@return {boolean} Value raised to the power of the exponent
+@implem js
+
+@author Nokome Bentley
+
+@example power(value, exponent)
+@example <caption>Example usage of power function.</caption>
+@example power(2,2)
+@example returns 4
+ */

export default function pow(value, exponent) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(exponent), 'parameter `exponent` must be a number')
  return Math.pow(value, exponent)
}
