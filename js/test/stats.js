import { default as tape } from 'tape'

import * as stats from '../src/stats.js'

// Don't change these unless you want to
// fix a lot of the tests below!
const x = [0,1,2,3,4,5,6,7,8,9]
const y = [9,8,7,6,5,4,3,2,1,0]
const z = [0,1,2,3,4,4,3,2,1,0]
const a = [0,1,2,4,4,4,4,2,1,0]

tape('max', function (assert) {
    assert.equal(stats.max(x), 9)
    assert.end()
})

tape('mean', function (assert) {
    assert.equal(stats.mean(x), 4.5)
    assert.end()
})

tape('median', function (assert) {
    assert.equal(stats.median(x), 4.5)
    assert.end()
})

tape('min', function (assert) {
    assert.equal(stats.min(x), 0)
    assert.end()
})

tape('mode', function (assert) {
    assert.equal(stats.mode(a), 4)
    assert.end()
})

tape('sum', function (assert) {
    assert.equal(stats.sum(x), 45)
    assert.end()
})

tape('ttest', function (assert) {
	const unpaired = stats.ttest(x, y)
    assert.equal(unpaired._class, "ttest")
    assert.equal(unpaired.statistic, 0)

    const paired = stats.ttest(x, y, 0, 0, true)
    assert.equal(paired.df, 9)

    assert.end()
})
