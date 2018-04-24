import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'


/**
* @title length
* @name length
* @summary Length of the value.
*
* @description Returns the length of the given value. For the array, table or object,
* returns their actual length. For other types returns 1. 
*
* @param {anyt} value The value which length is to be measured.
* @returns {number} The length of the value.
*
* @implem js
*
* @example <caption>Example usage of length function.</caption>
* // returns 3
* length([2, 4, "t"])
*/

export default function length(value) {
  if (is_array(value)) return value.length
  else if (is_table(value)) return value.rows
  else if (is_object(value)) return Object.keys(value).length
  else return 1
}
