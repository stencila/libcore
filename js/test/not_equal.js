import test from 'tape'
import not_equal from '../src/not_equal.js'

test('not_equal', function (t) {
  t.equal(not_equal(1, 2), true)
  t.equal(not_equal(1, 1), false)
  t.equal(not_equal(2, 1), true)

  t.end()
})
