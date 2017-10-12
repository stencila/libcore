import test from 'tape'
import aggregate from '../src/aggregate.js'
import table from '../src/table.js'

test('aggregate', function (t) {
  // Aggregate an array using another grouping array
  t.deepEqual(
    aggregate(
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ['a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'd'],
      {
        min: 'min(values)',
        sum: 'sum(values)'
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
    aggregate(table1, 'region',{
      min_v1: 'min(group.v1)',
      sum_v2: 'sum(group.v2)'
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
  t.deepEqual(
    aggregate(table2, ['g1', 'g2'],{
      sum: 'sum(group.v1)'
    }),
    table({
      g1: [1, 1, 2, 2],
      g2: ['a', 'b', 'a', 'b'],
      sum: [4, 6, 12, 23]
    })
  )

  t.end()
})
