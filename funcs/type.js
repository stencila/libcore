/**
* @title type
* @name type
* @summary Get the type name of a value.
*
* @description A base function that returns the type name e.g. "number" of a value.
*
* @param {any} value The value for which the type is wanted.
* @returns {string} True if the value is of type boolean, else false.
*
* @implem js
* @example <caption>Example usage of type function. Get the type of an integer literal. </caption>
* // returns "integer"
* type(42)
*
* @example <caption>Example usage of type function. Get the type of a one-dimensional array of Sheet cells. </caption>
* // returns "array[string]"
* type(A1:A10)
*
** @example <caption>Example usage of type function. Get the type of a two-dimensional array of Sheet cells.</caption>
* // returns "matrix[number]"
* type(A1:D5)
*/

export default function type (value) {
  let type = typeof value

  if (value === null) {
    return 'null'
  } else if (type === 'boolean') {
    return 'boolean'
  } else if (type === 'number') {
    let isInteger = false
    if (value.isInteger) isInteger = value.isInteger()
    else isInteger = (value % 1) === 0
    return isInteger ? 'integer' : 'number'
  } else if (type === 'string') {
    return 'string'
  } else if (type === 'object') {
    if (value.constructor === Array) return 'array'
    else {
      if (value.type) return value.type
      else return 'object'
    }
  } else {
    return 'unknown'
  }
}
