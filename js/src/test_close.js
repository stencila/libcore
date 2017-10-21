import close from './close'
import test from './test'

export default function test_close (value, expected, precision, message = '') {
  const passed = close(value, expected, precision)
  if (!passed && !message.length) {
    message = `Value ${value} is not close to expected ${expected} with precision ${precision}`
  }
  return test(passed, message)
}
