import { default as stdlib } from '@stdlib/stdlib'

/**
* @title is_object
* @name is_object
* @summary Checks if value is of type object.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type object, else false.
*
* @implem js
* @example <caption>Example usage of is_object function.</caption>
* // returns true
* is_object([])
*
*/

export default function is_object (value) {
  return stdlib.assert.isObject(value)
}
