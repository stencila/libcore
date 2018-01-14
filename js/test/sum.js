import test from 'tape'
import sum from '../src/sum.js'

test('sum', function (t) {
  t.equal(sum(1), 1)
  t.equal(sum([1]), 1)
  t.equal(sum([1, 2, 3]), 6)
  t.equal(sum(1, 2, 3), 6)
  t.equal(sum(1, 2, [3, 4], 5), 15)

  t.throws(() => sum(1, 'foo', 3), /Unhandled argument type "string"/)
  t.end()
})
