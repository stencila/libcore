import test from 'tape'
import negative from '../funcs/negative.js'

test('negative', function (t) {
  t.equal(negative(1), -1)
  t.equal(negative(-1), 1)
  t.equal(negative(-3.14), 3.14)

  t.throws(() => negative('foo'), /parameter `value` must be a number/)

  t.end()
})
