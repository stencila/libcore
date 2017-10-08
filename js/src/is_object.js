import { default as stdlib } from '@stdlib/stdlib'

export default function is_object (value) {
  return stdlib.assert.isObject(value)
}
