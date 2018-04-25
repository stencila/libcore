import test from 'tape'
import min from '../funcs/min.js'

test('min', function (t) {
  t.equal(min([0,1,2,3,4,5,6,7,8,9]), 0)

  t.throws(() => min('foo'), /parameter `value` must be an array of numbers/)
  t.end()
})
