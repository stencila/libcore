export default function test (condition, message = '') {
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
      message: message.length ? message : 'Failed'
    }
  }
}
