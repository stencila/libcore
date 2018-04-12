+/**
+@title less
+@summary Check if given value is less than the other one.
+
+
+@param {number} value The tested value
+@param {number} other The other value to test against.
+@return {boolean} True if the value is less than the other, else false.
+
+@example less(value, other)
+@example <caption>Example usage of less function.</caption>
+@example less(1,2)
+@example returns True
+ */

export default function less(value, other) {
  return value < other
}
