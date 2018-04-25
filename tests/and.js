import test from 'tape'
import and from '../funcs/and.js'

test('and', function (t) {
  t.equal(and(true, true), true)
  t.equal(and(true, false), false)
  t.equal(and(false, true), false)

  t.end()
})
