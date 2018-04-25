
/**
* @title assert
* @name assert
* @summary Checks if the condition is met and displays predefined message.
*
*
*
* @param {boolean} condition
* @param {string} message
* @return {boolean} If the condition is met, returns true. Otherwise, throws an error..
*
* @example assert(condition, message)
* @example <caption>Example usage of assert function.</caption>
* // returns True
* assert((1 === 1, "one should equal one")
*
*/

export default function assert (condition, message) {
  if (!condition) throw new Error(message)
  return true
}
