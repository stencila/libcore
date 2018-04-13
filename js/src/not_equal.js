import equal from './equal'

+/**
+@title not_equal
+@summary Check if given value is within range.
+
+@description
+
+Checks if the given value is within the defined range (between lower and upper)
+and returns true if the value is between lower and upper, otherwise returns false.
+
+@param {number} value The tested value
+@param {number} lower The lower bound of the range.
T@param {number} upper The lower bound of the range.he upper bound of the range.
+@return {boolean} True if the value is between lower and upper, else false.
+
+@example between(x, upper, lower)
+@example <caption>Example usage of between function.</caption>
+returns True
+@example between(2,1,5)
+ */

export default function not_equal (value, other) {
  return !equal(value, other)
}
