import tape from 'tape'
import test_between from '../funcs/test_between.js'

tape('test_between', function (t) {
  const test1 = test_between(5, 0, 10)
  t.deepEqual(test1, {
    type: 'test',
    passed: true,
    message: 'Passed'
  })

  const test2 = test_between(5, 10, 20)
  t.deepEqual(test2, {
    type: 'test',
    passed: false,
    message: 'Value 5 is not between 10 and 20'
  })

  t.end()
})
