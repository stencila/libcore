import test from 'tape'
import aggregate from '../src/aggregate.js'
import call from '../src/call.js'
import symbol from '../src/symbol.js'
import table from '../src/table.js'

test('aggregate', function (t) {
  // Aggregate an array using another grouping array
  t.deepEqual(
    aggregate(
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ['a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'd'],
      {
        min: call('min',[symbol('.')]),
        sum: call('sum',[symbol('.')])
      }
    ),
    table({
      group: ['a', 'b', 'c', 'd'],
      min: [1, 3, 5, 9],
      sum: [3, 7, 26, 9]
    })
  )

  // Aggregate a table using a single group variable
  const table1 = table({
    region: ['N', 'N', 'S', 'S', 'W', 'W', 'W', 'W', 'E'],
    v1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    v2: [1, 1, 1, 1, 1, 1, 1, 1, 1]
  })
  t.deepEqual(
    aggregate(table1, 'region', {
      min_v1: call('min', [symbol('v1')]),
      sum_v2: call('sum', [symbol('v2')])
    }),
    table({
      region: ['N', 'S', 'W', 'E'],
      min_v1: [1, 3, 5, 9],
      sum_v2: [2, 2, 4, 1]
    })
  )

  // Aggregate a table using two grouping variables
  const table2 = table({
    g1: [1, 1, 1, 1, 2, 2, 2, 2, 2],
    g2: ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'b'],
    v1: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
  const table3 = table({
    g1: [1, 1, 2, 2],
    g2: ['a', 'b', 'a', 'b'],
    sum: [4, 6, 12, 23]
  })
  t.deepEqual(
    aggregate(table2, ['g1', 'g2'],{
      sum: call('sum', [symbol('v1')])
    }),
    table3
  )

  // Aggregate a table using a group encoding
  const table4 = table({
    g1: [1, 1, 1, 2, 2, 2, 3, 3, 3],
    g2: [1, 1, 2, 2, 3, 3, 3, 3, 3],
    v1: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
  const table5 = table({
    group: [1, 2, 4, 6, 9],
    sum:   [3, 3, 4, 11, 24]
  })
  t.deepEqual(
    aggregate(table4, {
      group: call('multiply', [symbol('g1'), symbol('g2')])
    },{
      sum: call('sum', [symbol('v1')])
    }),
    table5
  )

  t.end()
})
