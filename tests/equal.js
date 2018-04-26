import test from 'tape'
import equal from '../funcs/equal.js'

test('equal', function (t) {
  t.equal(equal(true, true), true)
  t.equal(equal(true, false), false)
  t.equal(equal(true, 1), false)

  t.equal(equal(1.23, 1.23), true)
  t.equal(equal(123.0, 123), true)

  t.equal(equal({
    a: 1,
    b: [1, 2, 3],
    c: {}
  }, {
    a: 1,
    b: [1, 2, 3],
    c: {}
  }), true)

  t.end()
})
