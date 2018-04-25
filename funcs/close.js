import { default as stdlib } from '@stdlib/stdlib'

/**
* @title close
* @summary Is a value close to another?
*
* @description
*
* Checks if the given value is close to another value, within a defined precision range
* Returns true, if the value is close to another within the defined precision, else, returns false.
*
*
* @param {number} value The tested value
* @param {number} expected The value to compare to.
* @param {number} precision The precision of the comparison.
* @return {boolean} True if the value is within plus or minus precision of the other value, else false.
*
* @example close(x, upper, lower)
* @example <caption>Example usage of close function.</caption>
* // returns True
* close(1.2,1,0.3)
*
*/

export default function close (value, expected, precision) {
  return stdlib.assert.isBetween(
    value, expected - precision, expected + precision,
    'closed', 'closed'
  )
}
