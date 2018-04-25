import tape from 'tape'
import test_close from '../funcs/test_close.js'

tape('test_close', function (t) {
  const test1 = test_close(5, 5, 0.1)
  t.deepEqual(test1, {
    type: 'test',
    passed: true,
    message: 'Passed'
  })

  const test2 = test_close(5, 0, 0.1)
  t.deepEqual(test2, {
    type: 'test',
    passed: false,
    message: 'Value 5 is not close to expected 0 with precision 0.1'
  })

  t.end()
})
