import test from 'tape'
import greater_or_equal from '../funcs/greater_or_equal.js'

test('greater_or_equal', function (t) {
  t.equal(greater_or_equal(1, 2), false)
  t.equal(greater_or_equal(1, 1), true)
  t.equal(greater_or_equal(2, 1), true)

  t.end()
})
