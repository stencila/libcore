import { isEqual } from 'lodash'

import type from './type'

/**
* @summary Are two values equal?
*
* @description
*
* Performs a deep comparison between two values to determine if they are equivalent.
*
* @param {number} value The value to be compared.
* @param {number} other The value compared to.
* @return {boolean} True if the values are equivalent, else false.
*
* @example
* // returns true
* equal(1, 1)
*/

export default function equal (value, other) {
  const type_ = type(value)
  if (type_ !== type(other)) return false
  else return isEqual(value, other)
}
