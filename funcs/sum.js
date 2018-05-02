import is_number from './is_number'

import _reduce from './_reduce'

/**
* @summary Sum of numbers
*
* @description
*
* Sum of numbers.
*
* @param {...any} values Numbers to sum.
* @return {number} The sum of the numbers.
*
* @example
* // returns 6
* sum([1, 2, 3])
*
* @example
* // returns 6
* sum(1, 2, 3)
*/
export default function sum (...values) {
  return _reduce(0, (accumulator, value) => accumulator + value, is_number, ...values)
}
