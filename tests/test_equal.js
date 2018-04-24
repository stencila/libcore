import tape from 'tape'
import test_equal from '../src/test_equal.js'

tape('test_equal', function (t) {
  const test1 = test_equal('foo', 'foo')
  t.deepEqual(test1, {
    type: 'test',
    passed: true,
    message: 'Passed'
  })

  const test2 = test_equal('foo', 'bar')
  t.deepEqual(test2, {
    type: 'test',
    passed: false,
    message: 'Observed value foo is not equal to expected value bar'
  })

  const test3 = test_equal('foo', 'bar', 'foo and bar are not equal')
  t.deepEqual(test3, {
    type: 'test',
    passed: false,
    message: 'foo and bar are not equal'
  })

  t.end()
})
