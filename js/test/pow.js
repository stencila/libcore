import test from 'tape'
import pow from '../src/pow.js'

test('pow', function (t) {
  t.equal(pow(1, 1), 1)
  t.equal(pow(2, 2), 4)
  t.equal(pow(3, 3.3), Math.pow(3, 3.3))

  t.throws(() => pow('foo', 2), /parameter `value` must be a number/)
  t.throws(() => pow(2, 'exp'), /parameter `exponent` must be a number/)

  t.end()
})
