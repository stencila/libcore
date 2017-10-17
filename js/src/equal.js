import { isEqual } from 'lodash-es'
import type from './type'

export default function equal (observed, expected) {
  const type_ = type(observed)
  if (type_ !== type(expected)) return false
  else return isEqual(observed, expected)
}
