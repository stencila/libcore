import test from 'tape'
import positive from '../src/positive.js'

test('positive', function (t) {
  t.equal(positive(1), 1)
  t.deepEqual(positive([1, 2, 3]), [1, 2, 3])

  t.end()
})
