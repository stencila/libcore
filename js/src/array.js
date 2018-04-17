import is_array from './is_array'
import is_table from './is_table'


/**
* @title array
* @name array
* @summary Turns the value into an array.
*
* @description
* Creates an array from the provided value. If the value is a table, returns an array of objects where  each object has
* a property with the same name as the columns and the value of the property equal to the elements in the rows.
*
*
* @param {any} value The value to be turned into an array.
* @return {array} The created array.
*
* @implem js
*
* @example array(value)
* @example <caption>Example usage of array function.</caption>
*
* @example array( "hello")
* @example returns ["hello"]
*
* @example array([1,2,3])
* @example returns [1,2,3]
*
* @example array( table({a: [1, 2, 3], b: ['1', '2', '3']} )
* @example returns [{ a: 1, b: '1' }, { a: 2, b: '2' }, { a: 3, b: '3' }]
*/

export default function array(value) {
  if (is_array(value)) return value
  else if (is_table(value)) return _array_table(value)
  else return [value]
}

function _array_table (table) {
  let colNames = Object.keys(table.data)
  let array = []
  for (var rowNumber = 0; rowNumber < table.rows; rowNumber++) {
    let rowData = {}
    for (let colName of colNames) {
      rowData[colName] = table.data[colName][rowNumber]
    }
    array.push(rowData)
  }
  return array
}
