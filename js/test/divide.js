import test from 'tape'
import divide from '../src/divide.js'

test('divide', function (t) {
  t.equal(divide(1, 1), 1)
  t.equal(divide(4, 2), 2)
  t.equal(divide(3.3, 1.1), 3.3/1.1)

  t.throws(() => divide('foo', 2), /parameter `value` must be a number/)
  t.throws(() => divide(2, 'foo'), /parameter `other` must be a number/)

  t.end()
})
