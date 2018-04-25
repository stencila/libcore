import test from 'tape'
import is_object from '../funcs/is_object.js'

test('is_object', function (t) {
  t.equal(is_object({}), true)
  t.equal(is_object([]), false)
  t.equal(is_object(1), false)
  t.end()
})
