import assert from './assert'
import is_number from './is_number'

export default function pow(value, exponent) {
  assert(is_number(value), 'parameter `value` must be a number')
  assert(is_number(exponent), 'parameter `exponent` must be a number')
  return Math.pow(value, exponent)
}
