import { default as jStat } from 'jstat'
import { default as stdlib } from '@stdlib/stdlib'

// Aliases to reduce typing and allow for better minification
const slspecial = stdlib.math.base.special
const slstats = stdlib.math.statistics || stdlib.math.stats

export function max(x) {
  return jStat.max(x)
}

export function mean(x) {
  return jStat.mean(x)
}

export function median(x) {
  return jStat.median(x)
}

export function min(x) {
  return jStat.min(x)
}

export function mode(x) {
  return jStat.mode(x)
}

export function sum(x) {
  return jStat.sum(x)
}

export function ttest(x, y, mu, tails, paired, alpha) {
  const options = {
    mu: mu || 0,
    alternative: ['less', 'two-sided', 'greater'][(tails || 0) + 1],
    alpha: alpha || 0.05,
  }
  let result
  if (paired) result = slstats.ttest(x, y, options)
  else {
    if (y) result = slstats.ttest(x, Object.assign(options, { mu: mean(y) + options.mu }))
    else result = slstats.ttest(x, options)
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

