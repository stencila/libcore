import test from 'tape'
import less_or_equal from '../src/less_or_equal.js'

test('less_or_equal', function (t) {
  t.equal(less_or_equal(1, 2), true)
  t.equal(less_or_equal(1, 1), true)
  t.equal(less_or_equal(2, 1), false)

  t.end()
})
