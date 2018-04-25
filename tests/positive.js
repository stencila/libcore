import test from 'tape'
import positive from '../funcs/positive.js'

test('positive', function (t) {
  t.equal(positive(1), 1)
  t.equal(positive(-1), -1)
  t.equal(positive(3.14), 3.14)

  t.throws(() => positive('foo'), /parameter `value` must be a number/)

  t.end()
})
