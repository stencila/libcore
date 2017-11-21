import assert from './assert'
import is_number from './is_number'

export default function positive(value) {
  assert(is_number(value), 'parameter `value` must be a number')
  return value
}
