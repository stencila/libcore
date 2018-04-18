
/**
* @title assert
* @name assert
* @summary Checks if the condition is met and displays predefined message.
*
*
*
* @param {boolean} condition
* @param {string} eror
* @return {boolean} If the condition is met, returns true. Otherwise, throws an error..
*
* @example assert(condition, message)
* @example <caption>Example usage of assert function.</caption>
*
* @example assert((1 === 1, "one should equal one")
* @example returns true
*/


export default function assert (condition, message) {
  if (!condition) throw new Error(message)
  return true
}
