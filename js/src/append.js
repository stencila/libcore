import assert from './assert'
import clone from './clone'
import is_array from './is_array'

export default function append(value, other) {
  assert(is_array(value), 'parameter `value` must be an array')
  let result = clone(value)
  if (is_array(other)) result.push(...other)
  else result.push(other)
  return result
}
