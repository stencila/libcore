import jStat from 'jstat'

import { _wrap_array_number } from './_helpers'

/**
* @title mean
* @summary Calculate arithmetic mean. Uses jStat.mean
*
* @param {array[numbers]} value The array of numbers to have arithmetic mean calculated.
* @return {number} The calculated mean.
*
* @implem js
*
* @example mean(value)
* @example <caption>Example usage of mean function.</caption>
* // return 2;
* mean([1 ,2, 3])
*
*/

export default function mean (value) {
  return _wrap_array_number(jStat.mean, value)
}
