import test from 'tape'
import lower_case from '../funcs/lower_case.js'

test('lower_case', function (t) {
  t.equal(lower_case('Foo Bar'), 'foo bar')

  t.end()
})
