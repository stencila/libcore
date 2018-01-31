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
  // Call on a global Javascript function
  t.equal(execute({
    type: 'call',
    func: {type: 'get', name: 'add'},
    args: [2, 3]
  }), 5)

  // Call on Javascript function

  function no_pars () {}
  execute({type: 'call', func: no_pars})
  t.deepEqual(no_pars.pars, [])

  function one_par (a) { return a }
  t.throws(
    () => execute({type: 'call', func: one_par}),
    /Function parameter "a" must be supplied/,
    'one_par()'
  )
  t.equal(
    execute({type: 'call', func: one_par, args: [1]}),
    1,
    'one_par(1)'
  )
  t.equal(
    execute({type: 'call', func: one_par, namedArgs: {a: 1}}),
    1,
    'one_par(a=1)'
  )
  t.throws(
    () => execute({type: 'call', func: one_par, args: [2], namedArgs: {a: 1}}),
    /Function was supplied 1 extra arguments/,
    'one_par(2, a=1)'
  )
  t.throws(
    () => execute({type: 'call', func: one_par, namedArgs: {a: 1, b: 2, c: 3}}),
    /Function was supplied extra named arguments "b", "c"/,
    'one_par(a=1, b=2, c=3)'
  )
  t.deepEqual(one_par.pars, [{name: 'a'}])

  function three_pars (foo, bar, baz) {}
  execute({type: 'call', func: three_pars, namedArgs: {foo: 1, bar: 2, baz: 3}})
  t.deepEqual(three_pars.pars, [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}])

  function default_par (foo, bar="beep") { return bar }
  t.equal(
    execute({type: 'call', func: default_par, namedArgs: {foo: 1, bar: "bop"}}),
    'bop',
    'default_par(1, "bop")'
  )
  t.equal(
    execute({type: 'call', func: default_par, args: [1]}),
    'beep',
    'default_par(1)'
  )
  t.deepEqual(
    default_par.pars,
    [{name: 'foo'}, {name: 'bar', default: true}],
    'default_par.pars'
  )

  function repeats_par (arg1, ...args) { return `${arg1} ${args.join(',')}` }
  t.equal(
    execute({type: 'call', func: repeats_par, args: ["bar", "baz", "boop"]}),
    'bar baz,boop',
    'repeats_par("bar", "baz", "boop")'
  )
  t.equal(
    execute({type: 'call', func: repeats_par, args: ["bar"]}),
    'bar ',
    'repeats_par("bar")'
  )
  t.deepEqual(repeats_par.pars, [{name: 'arg1'}, {name: 'args', repeats: true}])

  function named_repeats_par (arg1, ___args) {
    return `${arg1} ${___args ? Object.entries(___args).join(' ') : ''}`
  }
  t.equal(
    execute({type: 'call', func: named_repeats_par, args: [1]}),
    '1 ',
    'named_repeats_par(1)'
  )
  t.equal(
    execute({type: 'call', func: named_repeats_par, args: [1], namedArgs: {a:1, b:2, c:3}}),
    '1 a,1 b,2 c,3',
    'named_repeats_par(1, a=1, b=2, c=3)'
  )
  t.deepEqual(
    named_repeats_par.pars, 
    [{name: 'arg1'}, {name: 'args', namedRepeats: true}],
    'named_repeats_par.pars'
  )

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
