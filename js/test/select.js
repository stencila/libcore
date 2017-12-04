import test from 'tape'
import select from '../src/select.js'
import table from '../src/table.js'

test('select', function (t) {
  t.deepEqual(select(['a', 'b', 'c'], 1), 'a')
  t.deepEqual(select(['a', 'b', 'c'], [1, 3]), ['a', 'c'])
  
  t.deepEqual(select({'a': 1, 'b': 2, 'c': 3}, 'a'), 1)
  t.deepEqual(select({'a': 1, 'b': 2, 'c': 3}, ['a', 'c']), {'a': 1, 'c': 3})
  
  t.deepEqual(
    select(
      table({
        a: [1, 2, 3],
        b: ['1', '2', '3']
      }), 
      'a'
    ),
    [1, 2, 3]
  )
  t.deepEqual(
    select(
      table({
        a: [1, 2, 3],
        b: ['1', '2', '3']
      }), 
      ['a', 'b']
    ),
    table({
      a: [1, 2, 3],
      b: ['1', '2', '3']
    })
  )
  t.end()
})
