import test from 'tape'
import or from '../src/or.js'

test('or', function (t) {
  t.equal(or(true, true), true)
  t.equal(or(true, false), true)
  t.equal(or(false, true), true)
  t.equal(or(false, false), false)

  t.end()
})
