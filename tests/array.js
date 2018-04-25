import test from 'tape'
import array from '../funcs/array.js'
import table from '../funcs/table.js'

test('array', function (t) {
  t.deepEqual(array('foo'), ['foo'])
  t.deepEqual(array([1, 2, 3]), [1, 2, 3])
  t.deepEqual(array(table({
    a: [1, 2, 3],
    b: ['1', '2', '3']
  })), [
    { a: 1, b: '1' },
    { a: 2, b: '2' },
    { a: 3, b: '3' }
  ])

  t.end()
})
