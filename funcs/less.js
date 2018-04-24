/**
* @title less
* @name less
* @summary Check if given value is less than the other one.
*
*
* @param {number} value The tested value
* @param {number} other The other value to test against.
* @return {boolean} True if the value is less than the other, else false.
*
* @implem js
*
* @example less(value, other)
* @example <caption>Example usage of less function.</caption>
* // returns True
* less(1,2)
*
*/

export default function less(value, other) {
  return value < other
}
