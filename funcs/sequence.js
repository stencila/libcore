import assert from './assert'
import is_number from './is_number'
import { range } from 'lodash-es'

/**
* @title sequence
* @name sequence
* @summary Creates a range to step through.
*
* @description Creates a range (from "lodash-es" library). As per the lodash-es documentation:
* "Creates an array of numbers (positive and/or negative) progressing from start up to the end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0."
*
* @param {number} begin The beginning of the range.
* @param {number} end The end of the range.
* @param {number} step The value to increment or decrement by. The default value = 1.
* @returns {array[number]} An array of numbers.
*
* @implem js
*
* @example <caption>Example usage of sequence function.</caption>
* // returns [2, 4, 6, 8, 10]
* sequence(2, 10, 2)
*
* @author Nokome Bentley
*/

export default function sequence (begin, end, step = 1) {
  assert(is_number(begin), 'parameter `begin` must be a number')
  assert(is_number(end), 'parameter `end` must be a number')
  assert(is_number(step), 'parameter `step` must be a number')

  // lodash range goes "up to, but not including, end", so we
  // add step to end because we want to include end
  return range(begin, end + step, step)
}
