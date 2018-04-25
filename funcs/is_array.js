import { default as stdlib } from '@stdlib/stdlib'

import assert from './assert'
import is_string from './is_string'


/**
* @title is_array
* @name is_array
* @summary Checks if the array is the array of the given type of elements.
*
* @description
*
* Checks the types of elements that the array contains. Returns true if the elements are of the given type, else returns false.
*
* @param {array} value The array to be checked.
* @param {string} type The type of element, by default the value is "any".
* @return {boolean} Tue if array contains the elements of given type, else false.
*
* @implem js
*
* @example <caption>Example usage of is_array function.</caption>
* // returns true
* is_array([true, false], "boolean")
*
*/


export default function is_array (value, type = "any") {
  assert(is_string(type), 'parameter `type` must be a string')

  const sa = stdlib.assert
  switch (type) {
    case "any": return sa.isArray(value)
    case "boolean": return sa.isBooleanArray(value)
    case "integer": return sa.isIntegerArray(value)
    case "number": return sa.isNumberArray(value)
    case "string": return sa.isStringArray(value)
    case "object": return sa.isObjectArray(value)
    default: throw new Error(`Unknown type: ${type}`)
  }
}
