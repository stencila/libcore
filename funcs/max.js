import jStat from 'jstat'

import { _wrap_array_number } from './_helpers'

/**
* @title max
* @name max
* @summary Maximum value of the given array of numbers. Based on jStat.max
*
*
* @param {array[number]} value The tested array.
* @return {number} The maxium value of the array.
*
* @example max(value)
* @example <caption>Example usage of max function.</caption>
* // returns 2
* max([1,2])
*
*/

export default function max (value) {
  return _wrap_array_number(jStat.max, value)
}
