import test from 'tape'
import append from '../funcs/append.js'

test('append', function (t) {
  t.throws(() => append('foo', 1), /parameter `value` must be an array/)

  t.deepEqual(append([1, 2], 'foo'), [1, 2, 'foo'])
  t.deepEqual(append([1, 2], {a: 3}), [1, 2, {a: 3}])
  t.deepEqual(append([1, 2], true), [1, 2, true])
  t.deepEqual(append([1, 2], ['foo', 'bar']), [1, 2, 'foo', 'bar'])
  t.deepEqual(append(['foo', 'bar'], [1, 2]), ['foo', 'bar', 1, 2])

  t.end()
})
