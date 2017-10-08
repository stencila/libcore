import assert from './assert'
import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'

export default function table (value) {
  if (is_table(value)) return value
  else if (is_array(value, "object")) return _table_array_object(value)
  else if (is_object(value)) return _table_object(value)
  else throw new Error('parameter `value` must be an array of objects or an object of arrays')
}

function _table_array_object(array) {
  let data = {}
  let rows = array.length
  let fields = Object.keys(array[0])
  let columns = fields.length

  for (let field of fields) {
    data[field] = []
  }
  for (let row of array) {
    for (let field of fields) {
      data[field].push(row[field])
    }
  }

  return {
    type: 'table',
    data: data,
    columns: columns,
    rows: rows
  }
}

function _table_object(object) {
  let names = Object.keys(object)
  let columns = names.length
  let rows = null
  for (let name of names) {
    let column = object[name]
    assert(is_array(column), `object property '${name}' is not an array`)
    if (rows === null) rows = column.length
    else assert(column.length === rows, `object property '${name}' has length '${column.length}' which is different to length '${rows}' of first property '${names[0]}'`)
  }

  return {
    type: 'table',
    data: object,
    columns: columns,
    rows: rows
  }
}
