import { default as jStat } from 'jstat'
import { _wrap_array_number } from './_helpers'

/**
* @title min
* @name min
* @summary Calculate minimum value from the array of numbers. Uses jStat.min
*
* @param {array[numbers]} value The array of numbers to have minimum calculated.
* @return {number} The calculated minimum.
*
* @implem js
*
* @example min(value)
* @example <caption>Example usage of min function.</caption>
* // return 1;
* min([1 ,2, 3])
*
*/

export default function min(value) {
  return _wrap_array_number(jStat.min, value)
}
