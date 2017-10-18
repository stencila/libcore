import assert from './assert'
import is_string from './is_string'
import { snakeCase } from 'lodash-es'

export default function snake_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return snakeCase(value)
}
