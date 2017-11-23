import test from 'tape'

import is_syntax from '../src/is_syntax.js'
import call from '../src/call.js'
import symbol from '../src/symbol.js'

test('is_syntax', function (t) {
  t.equal(is_syntax(call('foo')), true)
  t.equal(is_syntax(symbol('foo')), true)
  t.equal(is_syntax(1), false)
  t.end()
})
