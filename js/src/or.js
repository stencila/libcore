import assert from './assert'
import is_boolean from './is_boolean'

+/**
+@title or
+@summary Logical OR.
+
+@description
+
+Logical OR. Returns true if either or both values are true, else returns false.
+
+@param {boolean} value The first boolean value.
+@param {boolean} other The second boolean value.
+@return {boolean} True if at least one of the values is true, else false.
+
+@example or(value, other)
+@example <caption>Example usage of or function.</caption>
+@example or(true, false)
+@example returns True
+ */

export default function or(value, other) {
  assert(is_boolean(value), 'parameter `value` must be a boolean')
  assert(is_boolean(other), 'parameter `other` must be a boolean')
  return value || other
}
