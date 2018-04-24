import assert from './assert'
import is_string from './is_string'
import { camelCase } from 'lodash-es'


/**
* @title camel_case
* @name camel_case
* @summary Concatenates words and phrases, removing all punctuation.
*
* @description Concatenates words or phrases in a way that each word or abbreviation in the middle of the phrase
* begins with a capital letter. No spaces or punctuation is used.
*
* @param {string} value The string to be concatenated to Camel Case.
* @return {string} Returns the value concatenated to Camel Case.
*
* @implem js
*
* @example camel_case(camel_case)
* @example <caption>Example usage of camel_case function.</caption>
*
* // returns CamelCaseExample
* camel_case("Camel Case Example")
*
*/



export default function camel_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return camelCase(value)
}
