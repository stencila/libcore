import test from 'tape'
import less from '../src/less.js'

test('less', function (t) {
  t.equal(less(1, 2), true)
  t.equal(less(1, 1), false)
  t.equal(less(2, 1), false)

  t.end()
})
