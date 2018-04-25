import test from 'tape'
import max from '../funcs/max.js'

test('max', function (t) {
  t.equal(max([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9)

  t.throws(() => max(1), /parameter `value` must be an array of numbers/)
  t.end()
})
