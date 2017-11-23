import test from 'tape'

import symbol from '../src/symbol.js'

test('symbol', function (t) {
  t.deepEqual(symbol('foo'), {
    type: 'symbol',
    name: 'foo'
  })

  t.end()
})
