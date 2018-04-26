import test from 'tape'
import is_boolean from '../funcs/is_boolean.js'

test('is_boolean', function (t) {
  t.equal(is_boolean(true), true)
  t.equal(is_boolean(false), true)
  t.equal(is_boolean(0), false)
  t.equal(is_boolean(1.23), false)
  t.end()
})
