import assert from './assert'
import is_string from './is_string'
import { camelCase } from 'lodash-es'

export default function camel_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return camelCase(value)
}
