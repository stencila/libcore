import assert from './assert'
import is_string from './is_string'
import { kebabCase } from 'lodash-es'

export default function kebab_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return kebabCase(value)
}
