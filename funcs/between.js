import stdlib from '@stdlib/stdlib'

/**
* @title between
* @summary Check if given value is within range.
*
* @description
*
* Checks if the given value is within the defined range (between lower and upper)
* and returns true if the value is between lower and upper, otherwise returns false.
*
* @param {number} value The tested value
* @param {number} lower The lower bound of the range.
* @param {number} upper The lower bound of the range.he upper bound of the range.
* @return {boolean} True if the value is between lower and upper, else false.
*
* @example between(x, upper, lower)
* @example <caption>Example usage of between function.</caption>
* // returns True
* between(2,1,5)
*/

export default function between (value, upper, lower) {
  return stdlib.assert.isBetween(value, upper, lower)
}
