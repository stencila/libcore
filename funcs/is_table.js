/**
* @title is_table
* @name is_table
* @summary Checks if value is of type table.
*
*
* @param {any} value The value to be checked.
* @returns {boolean} True if the value is of type table, else false.
*
* @implem js
* @example <caption>Example usage of is_table function.</caption>
* // returns true
* is_table(table({a: [1, 2, 3]})
*
*/

export default function is_table (value) {
  return typeof value === 'object' && value.type === 'table'
}
