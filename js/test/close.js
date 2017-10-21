import test from 'tape'
import close from '../src/close'

test('close', function (t) {
  t.ok(close(5, 5, 0))
  t.ok(close(5, 5, 0.01))
  t.ok(close(6, 5, 1))

  t.notOk(close(5, 5, -1))
  t.notOk(close(6, 5, 0.5))
  t.end()
})
