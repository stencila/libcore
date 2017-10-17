import { default as jStat } from 'jstat'

import { _wrap_array_number } from '../src/_helpers'

export default function min(value) {
  return _wrap_array_number(jStat.min, value)
}