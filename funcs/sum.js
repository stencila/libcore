import { default as jStat } from 'jstat'
import { _wrap_array_number } from './_helpers'

/**
* @title sum
* @name sum
* @summary Sum of numbers
*
* @description
*
* Sum of numbers. Uses jStat.sum.
*
* @param {array[number]} values An array of numbers to sum.
* @return {number} The sum of the numbers.
*
* @implem js
*
* @example sum(value)
* @example <caption>Example usage of sum function.</caption>
* // returns 6
* sum([1,2,3,])
*
* @author Nokome Bentley
*/

export default function sum(value) {
  return _wrap_array_number(jStat.sum, value)
}
