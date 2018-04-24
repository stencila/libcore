import tape from 'tape'
import test from '../src/test.js'

tape('test', function (t) {
  const test1 = test(true)
  t.deepEqual(test1, {
    type: 'test',
    passed: true,
    message: 'Passed'
  })

  const test2 = test(false)
  t.deepEqual(test2, {
    type: 'test',
    passed: false,
    message: 'Failed'
  })

  const test3 = test(false, 'This should be true')
  t.deepEqual(test3, {
    type: 'test',
    passed: false,
    message: 'This should be true'
  })

  t.end()
})
