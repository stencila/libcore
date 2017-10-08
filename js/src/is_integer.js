import { default as stdlib } from '@stdlib/stdlib'

export default function is_integer (value) {
  return stdlib.assert.isInteger(value)
}
