import test from 'tape'
import multiply from '../funcs/multiply.js'

test('multiply', function (t) {
  t.equal(multiply(1, 1), 1)
  t.equal(multiply(2, 2), 4)
  t.equal(multiply(3, 3.3), 3 * 3.3)

  t.throws(() => multiply('foo', 2), /parameter `value` must be a number/)
  t.throws(() => multiply(2, 'foo'), /parameter `other` must be a number/)

  t.end()
})
