import { default as stdlib } from '@stdlib/stdlib'

import mean from './mean'


/**
* @title Student's t-Test
* @summary One-sample and paired Student's t-Test on arrays of numbers.
*
*
* @param {array[number]} x The value to be checked.
* @param {array[number]} y
* @param {number} mu The hypothesized true mean under the null hypothesis. Default value = 0.
* @param {number} tails Whether the alternative hypothesis is that the mean of x (or difference between x and y) is larger than mu (1, i.e. "one-sided greater than"), smaller than mu (-1, i.e. "one-sided less than") or equal to mu (0, i.e. "two-sided").
* @param {boolean} paired Perform a paired t-test?. Default value is 'false'.
* @param {number} alpha Number in the interval [0,1] giving the significance level of the hypothesis test. Default value is 0.5
* @returns {object} An object of type "ttest"
*
* @implem js
* @implem r
* @example <caption>Example usage of t_test function.</caption>
* // returns 0
* // const x = [0,1,2,3,4,5,6,7,8,9]
* // const y = [9,8,7,6,5,4,3,2,1,0]
* t_test(x, y)
*
*/


export default function t_test(x, y, mu, tails, paired, alpha) {
  const implem = stdlib.math.stats.ttest
  const options = {
    mu: mu || 0,
    alternative: ['less', 'two-sided', 'greater'][(tails || 0) + 1],
    alpha: alpha || 0.05,
  }
  let result
  if (paired) result = implem(x, y, options)
  else {
    if (y) result = implem(x, Object.assign(options, { mu: mean(y) + options.mu }))
    else result = implem(x, options)
  }
  return {
    type: 't_test',
    mean: result.mean,
    sd: result.sd,
    statistic: result.statistic,
    ci: result.ci,
    df: result.df,
    p_value: result.pValue,
    rejected: result.rejected
  }
}
