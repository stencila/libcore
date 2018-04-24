import test from 'tape'
import filter from '../src/filter.js'
import table from '../src/table.js'

test('filter', function (t) {
  t.deepEqual(filter(['a', 'b', 'c'], 'index == 2 || value == "c"'), ['b', 'c'])
  
  t.deepEqual(filter({'a': 1, 'b': 2, 'c': 3}, 'name == "b" || value == 3'), {'b': 2, 'c': 3})
  
  t.deepEqual(
    filter(
      table({
        a: [1, 2, 3],
        b: ['1', '2', '3']
      }), 
      'row == 2 || (a == 3 && b == "3")'
    ),
    table({
      a: [2, 3],
      b: ['2', '3']
    })
  )
  t.end()
})
