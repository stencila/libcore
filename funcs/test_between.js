import between from './between'
import test from './test'

export default function test_between (value, lower, upper, message = '') {
  const passed = between(value, lower, upper)
  if (!passed && !message.length) {
    message = `Value ${value} is not between ${lower} and ${upper}`
  }
  return test(passed, message)
}
