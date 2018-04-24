import assert from './assert'
import is_string from './is_string'
import { startCase } from 'lodash-es'

/**
* @title title_case
* @name title_case
* @summary Changes all words in the string to start with upper case.
*
*
* @param {string} value The string to have all words changed start with upper case.
* @return {string} Returns the string with all words starting with upper case.
*
* @implem js
*
* @example <caption>Example usage of title_case function.</caption>
*
* // returns Title Case
* title_case("title case")
*
*/

export default function title_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return startCase(value)
}
