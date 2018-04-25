import test from 'tape'
import not from '../funcs/not.js'

test('not', function (t) {
  t.equal(not(false), true)
  t.equal(not(true), false)

  t.throws(() => not(1), /parameter `value` must be a boolean/)
  t.end()
})
