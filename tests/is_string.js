import test from 'tape'
import is_string from '../funcs/is_string.js'

test('is_string', function (t) {
  t.equal(is_string("foo"), true)
  t.equal(is_string(["foo", "bar"]), false)
  t.equal(is_string(1), false)
  t.end()
})
