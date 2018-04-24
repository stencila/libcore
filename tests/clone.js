import test from 'tape'
import clone from '../src/clone.js'
import table from '../src/table.js'

test('clone', function (t) {
  t.equal(clone(true), true)
  t.equal(clone(42), 42)
  t.equal(clone(1.23), 1.23)
  
  const array1 = [1, 2, 3]
  t.deepEqual(clone(array1), array1)

  const object1 = {'a': 1, 'b': 2, 'c': 3}
  t.deepEqual(clone(object1), object1)
  
  const table1 = table({
    a: [1, 2, 3],
    b: ['1', '2', '3']
  })
  t.deepEqual(clone(table1), table1)

  t.end()
})
