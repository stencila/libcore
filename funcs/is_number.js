import stdlib from '@stdlib/stdlib'

/**
* @title is_number
* @name is_number
* @summary Checks if value is of type number.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type number, else false.
*
* @implem js
* @example <caption>Example usage of is_number function.</caption>
* // returns true
* is_number(4.1)
*
*/

export default function is_number (value) {
  return stdlib.assert.isNumber(value)
}
