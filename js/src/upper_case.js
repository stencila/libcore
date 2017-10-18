import assert from './assert'
import is_string from './is_string'
import { upperCase } from 'lodash-es'

export default function upper_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return upperCase(value)
}
