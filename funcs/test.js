export default function test (condition, message = 'Failed') {
  if (condition) {
    return {
      type: 'test',
      passed: true,
      message: 'Passed'
    }
  } else {
    return {
      type: 'test',
      passed: false,
      message: message
    }
  }
}
