import test from 'tape'
import remainder from '../src/remainder.js'

test('remainder', function (t) {
  t.equal(remainder(12, 5), 2)
  t.equal(remainder(-1, 2), -1)
  t.equal(remainder(3.3, 1.1), 3.3 % 1.1)

  t.throws(() => remainder('foo', 2), /parameter `value` must be a number/)
  t.throws(() => remainder(2, 'foo'), /parameter `other` must be a number/)

  t.end()
})
