import assert from './assert'
import is_string from './is_string'
import { upperCase } from 'lodash-es'

/**
* @title upper_case
* @name upper_case
* @summary Changes all lower case to upper case in the string.
*
*
* @param {string} value The string to have lower case changed to upper case.
* @return {string} Returns the string with all upper case letters.
*
* @implem js
*
* @example <caption>Example usage of upper_case function.</caption>
*
* // returns UPPER CASE
* lower_case("lower case")
*
*/


export default function upper_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return upperCase(value)
}
