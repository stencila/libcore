import equal from './equal'

/**
* @title not_equal
* @name not_equal
* @summary Check if given value is not equal to the other.
*
*
* @param {number} value The tested value.
* @param {number} other The other value to be tested against.
* @return {boolean} True if the value is between lower and upper, else false.
*
* @implem js
*
* @example not_equal(value, other)
* @example <caption>Example usage of not_equal function.</caption>
* // returns False
* not_equal(2,1)
*/

export default function not_equal (value, other) {
  return !equal(value, other)
}
