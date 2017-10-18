import assert from './assert'
import is_string from './is_string'
import { startCase } from 'lodash-es'

export default function title_case (value) {
  assert(is_string(value), 'parameter `value` must be a string')

  return startCase(value)
}
