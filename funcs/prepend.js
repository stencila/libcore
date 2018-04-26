import assert from './assert'
import clone from './clone'
import is_array from './is_array'

/**
* @title prepend
* @summary Prepends an element to the array.
*
* @description
*
* Prepends the element to the array and returns the new array, with the prepended item.
*
* @param {array} value The array.
* @param {any} other The element to be prepended.
* @return {array} The array with prepended element.
*
* @implem js
*
* @example prepend(array, element)
* @example <caption>Example usage of prepend function.</caption>
* // returns ["hello", 1, 3, 6]
* prepend([1, 3, 6], "hello")
*
* @author Nokome Bentley
*
*/

export default function prepend (value, other) {
  assert(is_array(value), 'parameter `value` must be an array')
  let result = clone(value)
  if (is_array(other)) result.unshift(...other)
  else result.unshift(other)
  return result
}
