+/**
+@title greater
+@summary Check if given value is greater than the other.
+
+
+@param {number} value The tested value
+@param {number} other The other value to test against.
+@return {boolean} True if the value is greater than the other, else false.
+
+@example greater(value, other)
+@example <caption>Example usage of greater function.</caption>
+@example greater(2,1)
+@example returns True
+ */

export default function greater(value, other) {
  return value > other
}
