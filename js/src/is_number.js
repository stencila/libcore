import { default as stdlib } from '@stdlib/stdlib'

export default function is_number (value) {
  return stdlib.assert.isNumber(value)
}
