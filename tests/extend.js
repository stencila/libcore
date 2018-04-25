import test from 'tape'
import extend from '../funcs/extend.js'
import table from '../funcs/table.js'

test('extend', function (t) {
  t.deepEqual(extend([1], [2, 3]), [1, 2, 3])
  t.throws(() => extend([1], 'foo'), /parameter `extensions` must be an array/)

  t.deepEqual(extend({a: 2}, {b: 3, c: 'a * b'}), {a: 2, b: 3, c: 6})
  t.throws(() => extend({}, 'foo'), /parameter `extensions` must be an object/)

  const table1 = table({
    a: [1, 2, 3],
    b: [4, 5, 6]
  })
  const table2 = table({
    a: [1, 2, 3],
    b: [4, 5, 6],
    c: [5, 7, 9],
    d: [4.5, 6, 7.5]
  })
  t.deepEqual(extend(table1, {
    c: 'a + b',
    d: 'c - a/2'
  }), table2)
  t.throws(() => extend(table1, 'foo'), /parameter `extensions` must be an object/)

  t.throws(() => extend('foo', 'bar'), /parameter `value` must be an array, an object or a table/)

  t.end()
})
