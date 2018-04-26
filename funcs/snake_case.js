import { snakeCase } from 'lodash'

import assert from './assert'
import is_string from './is_string'

/**
* @title snake_case
* @name snake_case
* @summary Concatenates words and phrases, changing all upper case to lower case and connecting them with underscore "_"
*
* @description Concatenates words and phrases, changing all upper case to lower case and connecting them with underscore "_". No spaces or other punctuation is used.
*
* @param {string} value The string to be concatenated to Snake Case.
* @return {string} Returns the value concatenated to Snake Case.
*
* @implem js
*
*
* @example <caption>Example usage of snake_case function.</caption>
*
* // returns snake_case
* kebab_case("Snake, Case")
*
*/

export default function snake_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return snakeCase(value)
}
