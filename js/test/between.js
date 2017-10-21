import test from 'tape'
import between from '../src/between'

test('between', function (t) {
  t.ok(between(5, 0, 10))
  t.notOk(between(5, 10, 20))
  t.end()
})
