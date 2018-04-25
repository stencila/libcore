import test from 'tape'
import subtract from '../funcs/subtract.js'

test('subtract', function (t) {
  t.equal(subtract(12, 5), 7)
  t.equal(subtract(-1, 2), -3)
  t.equal(subtract(3.3, 1.1), 3.3 - 1.1)

  t.throws(() => subtract('foo', 2), /parameter `value` must be a number/)
  t.throws(() => subtract(2, 'foo'), /parameter `other` must be a number/)

  t.end()
})
