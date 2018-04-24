import assert from './assert'
import is_string from './is_string'
import { kebabCase } from 'lodash-es'

/**
* @title kebab_case
* @name kebab_case
* @summary Concatenates words and phrases, connecting them with underscore "_"
*
* @description Concatenates words and phrases, connecting them with underscore "_". No spaces or other punctuation is used.
*
* @param {string} value The string to be concatenated to Kebab Case.
* @return {string} Returns the value concatenated to Kebab Case.
*
* @implem js
*
* @example kebab_case(kebab_case)
* @example <caption>Example usage of kebab_case function.</caption>
*
* // returns Kebab_Case
* kebab_case("Kebab, Case")
*
*/


export default function kebab_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return kebabCase(value)
}
