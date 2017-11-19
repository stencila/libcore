import assert from './assert'
import is_boolean from './is_boolean'

export default function not(value) {
  assert(is_boolean(value), 'parameter `value` must be a boolean')
  return !value
}
