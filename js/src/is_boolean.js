import { default as stdlib } from '@stdlib/stdlib'

export default function is_boolean (value) {
  return stdlib.assert.isBoolean(value)
}
