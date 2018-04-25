import { default as stdlib } from '@stdlib/stdlib'

/**
* @title is_integer
* @name is_integer
* @summary Checks if value is of type integer.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type integer, else false.
*
* @implem js
* @example <caption>Example usage of is_integer function.</caption>
* // returns true
* is_integer(5)
*
*/

export default function is_integer (value) {
  return stdlib.assert.isInteger(value)
}
