import { isEqual } from 'lodash-es'
import type from './type'

/**
* @title equal
* @name equal
* @summary Are two values equal?.
*
* @description
*
* Performs a deep comparison between two values to determine if they are equivalent.
*
* @param {number} value The value to be compared.
* @param {number} other The value compared to.
* @return {boolean} True if the values are equivalent, else false.
*
* @implem js
*
* @example equal(value, other)
* @example <caption>Example usage of equal function.</caption>
* //returns True
* equal(1,1)
*
*/


export default function equal (value, other) {
  const type_ = type(value)
  if (type_ !== type(other)) return false
  else return isEqual(value, other)
}
