import equal from './equal'
import test from './test'

export default function test_equal (observed, expected, message = '') {
  const passed = equal(observed, expected)
  if (!passed && !message.length) {
    message = `Observed value ${observed} is not equal to expected value ${expected}`
  }
  return test(passed, message)
}
