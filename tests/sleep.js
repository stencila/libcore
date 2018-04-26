import test from 'tape'
import sleep from '../funcs/sleep.js'

test('sleep', function (t) {
  const start = new Date().getTime()
  const result = sleep(0.1)
  const finish = new Date().getTime()

  t.equal(result, 0.1)
  t.ok((100 - Math.abs(finish - start)) / 100.0 < 0.01, 'slept for within 1% of expected')

  t.end()
})
