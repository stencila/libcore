import { default as jStat } from 'jstat'
import { _wrap_array_number } from '../src/_helpers'

+/**
+@title max
+@summary Maximum value of the given array of numbers. Based on jStat.max
+
+
+@param {array[number]} value The tested array.
+@return {number} The maxium value of the array.
+
+@example max(value)
+@example <caption>Example usage of max function.</caption>
+@example max([1,2])
+@example returns 2
+ */

export default function max(value) {
  return _wrap_array_number(jStat.max, value)
}
