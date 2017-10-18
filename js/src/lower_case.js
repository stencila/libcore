import assert from './assert'
import is_string from './is_string'
import { lowerCase } from 'lodash-es'

export default function lower_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return lowerCase(value)
}
