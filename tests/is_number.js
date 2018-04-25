import test from 'tape'
import is_number from '../funcs/is_number.js'

test('is_number', function (t) {
  t.equal(is_number(1.001), true)
  t.equal(is_number(1), true)
  t.equal(is_number("1"), false)
  t.end()
})
