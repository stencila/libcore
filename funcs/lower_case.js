import assert from './assert'
import is_string from './is_string'
import { lowerCase } from 'lodash-es'

/**
* @title lower_case
* @name lower_case
* @summary Changes all upper case to lower case in the string.
*
*
* @param {string} value The string to have upper case changed to lower case.
* @return {string} Returns the string with all lower case letters.
*
* @implem js
*
* @example <caption>Example usage of lower_case function.</caption>
*
* // returns lower case
* lower_case("LoweR CasE")
*
*/


export default function lower_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return lowerCase(value)
}
