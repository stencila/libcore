import { default as stdlib } from '@stdlib/stdlib'

import mean from './mean'

export default function ttest(x, y, mu, tails, paired, alpha) {
  // FIXME: this seems to be inconsistent
  const implem = (stdlib.math.stats || stdlib.math.statistics).ttest
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
    _class: 'ttest',
    mean: result.mean,
    sd: result.sd,
    statistic: result.statistic,
    ci: result.ci,
    df: result.df,
    p_value: result.pValue,
    rejected: result.rejected
  }
}