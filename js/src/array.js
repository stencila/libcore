import is_array from './is_array'
import is_table from './is_table'

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
