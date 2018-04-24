import test from 'tape'
import kebab_case from '../src/kebab_case.js'

test('kebab_case', function (t) {
  t.equal(kebab_case('Foo Bar'), 'foo-bar')

  t.end()
})
