import test from 'tape'
import assert from '../src/assert.js'

test('assert', function (t) {
  t.equal(assert(1 === 1, "one should equal one"), true)
  t.throws(() => assert(1 === 3, "one should equal one"), /one should equal one/)
  t.end()
})
