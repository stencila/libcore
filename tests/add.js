import test from 'tape'
import add from '../src/add.js'

test('add', function (t) {
  t.equal(add(12, 5), 17)
  t.equal(add(3.3, 1.1), 3.3 + 1.1)

  t.equal(add('foo', 'bar'), 'foobar')

  t.deepEqual(add([1, 2], 'foo'), [1, 2, 'foo'])
  t.deepEqual(add([1, 2], ['foo', 'bar']), [1, 2, 'foo', 'bar'])

  t.deepEqual(add(['foo', 'bar'], [1, 2]), ['foo', 'bar', 1, 2])

  t.throws(() => add('foo', 2.2), /cannot add a "string" and a "number"/)

  t.end()
})
