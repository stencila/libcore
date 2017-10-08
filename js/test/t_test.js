import tape from 'tape'
import t_test from '../src/t_test.js'

const x = [0,1,2,3,4,5,6,7,8,9]
const y = [9,8,7,6,5,4,3,2,1,0]

tape('t_test', function (t) {
  const unpaired = t_test(x, y)
  t.equal(unpaired._class, "ttest")
  t.equal(unpaired.statistic, 0)

  const paired = t_test(x, y, 0, 0, true)
  t.equal(paired.df, 9)

  t.end()
})
