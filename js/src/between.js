import { default as stdlib } from '@stdlib/stdlib'

export default function between (value, upper, lower) {
  return stdlib.assert.isBetween(value, upper, lower)
}
