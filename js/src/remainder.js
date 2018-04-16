import assert from './assert'
import is_number from './is_number'

+/**
+@name remainder
+@title reminder
+@summary Reminder of division.
+
+@description
+
+Returns the remainder left over when a number is divided by a second number.
+The percent sign, `%`, is used as an alias for `remainder` e.g. `x % y` is equivalent
+to `remainder(x, y)`.
+
+@param {number} value The number to be divided.
+@param {number} divisor The number to divide by (divisor).
+@return {number} The reminder.
+
+@implem js
+@author Nokome Bentley
+
+@example reminder(value, divisor)
+@example <caption>Example usage of reminder function.</caption>
+@example reminder(5,2)
+@example returns 1
+ */

export default function remainder(value, other) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(other), 'parameter `other` must be a number')
  return value % other
}
