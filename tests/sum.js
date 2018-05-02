import test from 'tape'
import sum from '../funcs/sum.js'
import table from '../funcs/table.js'

test('sum', function (t) {
  t.equal(sum(1.2), 1.2)
  t.equal(sum([1, 0.2]), 1.2)
  t.equal(sum({a: 1, b: 0.2}), 1.2)
  t.equal(sum(table({a: [1, 2], b: [0.1, 0.1]})), 3.2)

  t.equal(sum([1, 2, 3]), 6)

  t.equal(sum(1, 2, 3), 6)
  t.equal(sum(1, 2, [3, 4], 5, {a: 6}), 21)

  t.throws(() => sum(1, 'foo', 3), /Unhandled argument type "string"/)

  t.end()
})
