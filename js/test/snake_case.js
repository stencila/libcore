import test from 'tape'
import snake_case from '../src/snake_case.js'

test('snake_case', function (t) {
  t.equal(snake_case('Foo Bar'), 'foo_bar')

  t.end()
})
