import test from 'tape'
import mean from '../funcs/mean.js'

test('mean', function (t) {
  t.equal(mean([0,1,2,3,4,5,6,7,8,9]), 4.5)

  t.throws(() => mean('foo'), /parameter `value` must be an array of numbers/)
  t.end()
})
