import test from 'tape'
import table from '../funcs/table.js'

test('table', function (t) {
  t.deepEqual(table([
    { a: 1, b: '1' },
    { a: 2, b: '2' },
    { a: 3, b: '3' }
  ]), {
    type: 'table',
    data: {
      a: [1, 2, 3],
      b: ['1', '2', '3']
    },
    columns: 2,
    rows: 3
  })

  t.deepEqual(table(table({
    a: [1, 2, 3],
    b: ['1', '2', '3']
  })), {
    type: 'table',
    data: {
      a: [1, 2, 3],
      b: ['1', '2', '3']
    },
    columns: 2,
    rows: 3
  })

  t.end()
})
