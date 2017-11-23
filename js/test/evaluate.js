import test from 'tape'

import call from '../src/call.js'
import evaluate from '../src/evaluate.js'
import symbol from '../src/symbol.js'
import table from '../src/table.js'


test('evaluate', function (t) {
  const obj = {a: 2, b: 3.14, c: 'foo'}
  const tbl = table({
    col1: [1, 2, 3],
    col2: [4, 5, 6]
  })

  t.equal(evaluate(symbol('a'), obj), obj.a)
  t.equal(evaluate(symbol('b'), obj), obj.b)
  t.equal(evaluate(symbol('c'), obj), obj.c)

  t.equal(evaluate(symbol('col1'), tbl), tbl.data.col1)
  t.equal(evaluate(symbol('col2'), tbl), tbl.data.col2)

  t.equal(evaluate(call('is_integer', [symbol('a')]), obj), true)
  t.equal(evaluate(call('multiply', [symbol('a'), symbol('b')]), obj), 6.28)

  t.end()
})
