import test from 'tape'
import sum from '../funcs/sum.js'

test('sum', function (t) {
  t.equal(sum([1.2]), 1.2)
  t.equal(sum([1, 2, 3]), 6)

  t.throws(() => sum(1), /parameter `value` must be an array of numbers/)
  t.end()
})
