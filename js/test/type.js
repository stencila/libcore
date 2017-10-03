import { default as tape } from 'tape'
import { default as type } from '../src/type.js'

tape('type', function (assert) {
  assert.equal(type(null), 'null')
  assert.equal(type(true), 'boolean')
  assert.equal(type(3.14), 'number')
  assert.equal(type(42), 'integer')
  assert.equal(type('hello'), 'string')

  assert.equal(type([]), 'array')

  assert.equal(type({}), 'object')

  assert.end()
})
