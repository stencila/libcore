import test from 'tape'
import assert from '../funcs/assert.js'

test('assert', function (t) {
  t.equal(assert(true, 'this is ok'), true)
  t.throws(() => assert(1 === 3, 'one should equal one'), /one should equal one/)
  t.end()
})
