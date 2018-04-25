import test from 'tape'
import is_array from '../funcs/is_array.js'

test('is_array', function (t) {
  t.equal(is_array([]), true)
  t.equal(is_array([{}, []], "any"), true)
  t.equal(is_array([true, false], "boolean"), true)
  t.equal(is_array([1.2, 1.3], "number"), true)
  t.equal(is_array([1, 2, 3], "integer"), true)
  t.equal(is_array(['a', 'b', 'c'], "string"), true)
  t.end()
})
