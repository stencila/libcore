import assert from './assert'
import is_number from './is_number'

+/**
+@name divide
+@title divide
+@summary Divide two numbers
+
+@description
+
+Divide two numbers. The slash, `/`, is used as an alias for `divide` e.g.
+`x / y` is equivalent to `divide(x, y)`.
+
+@param {number} value The value to be divided
+@param {number} other The divisor
+@return {number} Division result
+
+@example divide(x, y)
+@example x / y
+
@implem js
+
+@author Nokome Bentley
+/*

export default function divide(value, other) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(other), 'parameter `other` must be a number')
  return value / other
}
