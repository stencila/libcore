import stdlib from '@stdlib/stdlib'

/**
* @title is_boolean
* @name is_boolean
* @summary Checks if value is of type boolean.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type boolean, else false.
*
* @implem js
* @example <caption>Example usage of is_boolean function.</caption>
* // returns true
* is_boolean(false)
*
*/

export default function is_boolean (value) {
  return stdlib.assert.isBoolean(value)
}
