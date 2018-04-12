
+/**
+@title greater_or_equal
+@summary Check if the given value is greater or equal, to the other value.
+
+@description
+
+Checks if the given value is greater or equal, to the other value.
+
+@name greater_or_equal
+
+@param {any} value
+@param {any} other
+@return {boolean} If the given value is greater or equal to the other value returns true, else false.
+
+@implem js
+
+@example greater_or_equal(value, other)
+@example <caption>Example usage of greater_or_equal function.</caption>
+@example greater_or_equal(2,1)
+returns True
+ */



export default function greater_or_equal(value, other) {
  return value >= other
}
