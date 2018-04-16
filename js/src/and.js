import assert from './assert'
import is_boolean from './is_boolean'

+/**
+@title and
+@summary Logical AND.
+
+@param {boolean} value The first value.
+@param {boolean} other The other value.
+@return {boolean} True if both values are true, else false.
+
+@implem js
+
+@example and(value, other)
+@example <caption>Example usage of and function.</caption>
+@example and(True, False)
+@example returns True
+ */


export default function and(value, other) {
  assert(is_boolean(value), 'parameter `value` must be a boolean')
  assert(is_boolean(other), 'parameter `other` must be a boolean')
  return value && other
}
