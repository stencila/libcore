import assert from './assert'
import is_number from './is_number'
import { range } from 'lodash-es'

export default function sequence (begin, end, step = 1) {
  assert(is_number(begin), 'parameter `begin` must be a number')
  assert(is_number(end), 'parameter `end` must be a number')
  assert(is_number(step), 'parameter `step` must be a number')

  // lodash range goes "up to, but not including, end", so we
  // add step to end because we want to include end
  return range(begin, end + step, step)
}
