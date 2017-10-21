import { isEqual } from 'lodash-es'
import type from './type'

export default function equal (value, other) {
  const type_ = type(value)
  if (type_ !== type(other)) return false
  else return isEqual(value, other)
}
