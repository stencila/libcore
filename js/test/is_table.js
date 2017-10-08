import test from 'tape'
import is_table from '../src/is_table.js'
import table from '../src/table.js'

test('is_table', function (t) {
  t.equal(is_table(table({a: [1, 2, 3]})), true)
  t.equal(is_table(1), false)
  t.end()
})
