import test from 'tape'
import camel_case from '../src/camel_case.js'

test('camel_case', function (t) {
  t.equal(camel_case('Foo Bar'), 'fooBar')

  t.end()
})
