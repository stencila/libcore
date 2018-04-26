import test from 'tape'
import greater from '../funcs/greater.js'

test('greater', function (t) {
  t.equal(greater(1, 2), false)
  t.equal(greater(1, 1), false)
  t.equal(greater(2, 1), true)

  t.end()
})
