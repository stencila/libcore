import { default as jStat } from 'jstat'

import { _wrap_array_number } from '../src/_helpers'

export default function sum(value) {
  return _wrap_array_number(jStat.sum, value)
}
