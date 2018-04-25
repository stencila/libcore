// Helper functions
// e.g. to provide consistency and reduce repetition when wrapping other functions

import assert from './assert'
import is_array from './is_array'

export function _wrap_array_number (func, value) {
  assert(is_array(value, "number"), "parameter `value` must be an array of numbers")
  return func(value)
}
