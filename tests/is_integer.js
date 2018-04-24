import test from 'tape'
import is_integer from '../src/is_integer.js'

test('is_integer', function (t) {
  t.equal(is_integer(1), true)
  t.equal(is_integer([1, 2]), false)
  t.equal(is_integer(1.23), false)
  t.end()
})
