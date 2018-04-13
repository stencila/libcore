import { default as jStat } from 'jstat'
import { _wrap_array_number } from '../src/_helpers'

+/**
+@title min
+@summary Calculate minimum value from the array of numbers. Uses jStat.min
+
+@param {array[numbers]} value The array of numbers to have minimum calculated.
+@return {number} The calculated minimum.
+
+@example min(value)
+@example <caption>Example usage of min function.</caption>
+@example min([1 ,2, 3])
+@example return 1;
+ */

export default function min(value) {
  return _wrap_array_number(jStat.min, value)
}
