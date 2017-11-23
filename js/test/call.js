import test from 'tape'

import call from '../src/call.js'

test('call', function (t) {
  t.deepEqual(call('foo',[1, 'bar']), {
    type: 'call',
    name: 'foo',
    args: [1, 'bar']
  })

  t.end()
})
