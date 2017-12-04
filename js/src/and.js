import assert from './assert'
import is_boolean from './is_boolean'

export default function and(value, other) {
  assert(is_boolean(value), 'parameter `value` must be a boolean')
  assert(is_boolean(other), 'parameter `other` must be a boolean')
  return value && other
}
