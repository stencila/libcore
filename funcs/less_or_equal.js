/**
* @title less_or_equal
* @name less_or_equal
* @summary Check if given value is less or equal to the other one.
*
*
* @param {number} value The tested value
* @param {number} other The other value to test against.
* @return {boolean} True if the value is lower or equal, else false.
*
* @implem js
*
* @example less_or_equal(value, other)
* @example <caption>Example usage of less_or_equal function.</caption>
* // returns True
* less_or_equal(1,2)
*/

export default function less_or_equal (value, other) {
  return value <= other
}
