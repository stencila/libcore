import test from 'tape'
import execute from '../src/execute'

test('execute:values', function (t) {
  // Values that are not operations are simply returned
  t.equal(execute(null), null)
  t.equal(execute(true), true)
  t.equal(execute(1), 1)
  t.equal(execute(1.1), 1.1)
  t.equal(execute('a string'), 'a string')
  t.deepEqual(execute([]), [])
  t.deepEqual(execute({}), {})
  t.deepEqual(execute({type: 'custom'}), {type: 'custom'})
  t.end()
})

test('execute:call', function (t) {
  // Call on a global function
  t.equal(execute({
    type: 'call',
    func: {type: 'get', name: 'add'},
    args: [2, 3]
  }), 5)

  // Call on an anonymous local function
  t.equal(execute({
    type: 'call',
    func: {
      // A function that squares a number. Would be defined in Mini as:
      //   function (value) value * value
      type: 'function', 
      pars: [
        {name: 'value'}
      ],
      body: [{
        type: 'call',
        func: {type: 'get', name: 'multiply'},
        args: [
          {type: 'get', name: 'value'},
          {type: 'get', name: 'value'}
        ]
      }]
    },
    args: [3]
  }), 9)

  // Call a function using `this`
  let func = {
    // Would be defined in Mini as:
    //   function () this.height < 10
    // or, more concisely as
    //   .height < 10
    type: 'function',
    body: [{
      type: 'call',
      func: {type: 'get', name: 'less'},
      args: [{
        type: 'call',
        func: {type: 'get', name: 'select'},
        args: [
          {type: 'get', name: 'this'},
          'height'
        ]
      }, 10]
    }]
  }
  t.equal(execute({type: 'call', func: func, this: {height: 9}}), true)
  t.equal(execute({type: 'call', func: func, this: {height: 14}}), false)

  // Call a function which sets & gets a local variable
  t.equal(execute({
    type: 'call',
    func: {
      // Would be defined in Mini as:
      //   function ()
      //      a = 6
      //      a * 7
      type: 'function',
      body: [{
        type: 'set',
        name: 'a',
        value: 6
      },{
        type: 'call',
        func: {type: 'get', name: 'multiply'},
        args: [
          {type: 'get', name: 'a'},
          7
        ]
      }]
    }
  }), 42)

  t.end()
})
