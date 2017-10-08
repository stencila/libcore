import { default as stdlib } from '@stdlib/stdlib'

export default function is_string (value) {
  return stdlib.assert.isString(value)
}
