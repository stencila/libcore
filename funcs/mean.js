import is_number from './is_number'

import _reduce from './_reduce'

/**
* @summary Calculate arithmetic mean
*
* @param {...any} value The array of numbers to have arithmetic mean calculated.
* @return {number} The calculated mean.
*
* @example
* // returns 2
* mean([1, 2, 3])
*/
export default function mean (...values) {
  let acc = _reduce({
    sum: 0,
    n: 0
  }, (accumulator, value) => {
    accumulator.sum += value
    accumulator.n += 1
    return accumulator
  }, is_number, ...values)
  return acc.sum / acc.n
}
