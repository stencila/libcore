import assert from './assert'
import clone from './clone'
import is_array from './is_array'

/**
* @title append
* @name append
* @summary Appends an element to the array.
*
* @description
*
* Appends the element to the array and returns the new array, with the appended item.
*
* @param {array} array The array.
* @param {any} element The element to be appended.
* @return {array} The array with appended element.
*
* @implem js
*
* @example append(array, element)
* @example <caption>Example usage of append function.</caption>
*
* @example append([1, 3, 6], "hello")
* @example returns [1, 3, 6, "hello"]
*/

export default function append(value, other) {
  assert(is_array(value), 'parameter `value` must be an array')
  let result = clone(value)
  if (is_array(other)) result.push(...other)
  else result.push(other)
  return result
}
