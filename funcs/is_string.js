import stdlib from '@stdlib/stdlib'

/**
* @title is_string
* @name is_string
* @summary Checks if value is of type string.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type string, else false.
*
* @implem js
* @example <caption>Example usage of is_string function.</caption>
* // returns true
* is_string('false')
*
*/

export default function is_string (value) {
  return stdlib.assert.isString(value)
}
