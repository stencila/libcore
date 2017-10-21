import { default as stdlib } from '@stdlib/stdlib'

export default function close (value, expected, precision) {
  return stdlib.assert.isBetween(
	value, expected-precision, expected+precision,
	'closed', 'closed'
  )
}
