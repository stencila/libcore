import array from './array'
import assert from './assert'
import is_array from './is_array'
import is_integer from './is_integer'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import length from './length'

export default function select(value, items) {
  if (is_array(value)) return _select_array(value, items)
  else if (is_table(value)) return _select_table(value, items)
  else if (is_object(value)) return _select_object(value, items)
  else throw new Error('parameter `value` must be an array, an object, or a table')
}

function _select_array (value, items) {
  if (is_integer(items)) {
    if (items < 1) throw new Error('array index must be greater than or equal to 1')
    if (items > length(value)) throw new Error('array index must be less than or equal to length of array')
    return value[items - 1]
  } else {
    let indices = array(items)
    assert(is_array(indices, 'integer'), 'parameter `items` should be an integer or an array of integers')
    return indices.map((index) => {
      return _select_array(value, index)
    })
  }
}

function _select_object (value, items) {
  if (is_string(items)) {
    const property = value[items]
    if (property === undefined) throw new Error(`object does not have a property named "${items}"`)
    return property
  } else {
    let names = array(items)
    assert(is_array(names, 'string'), 'parameter `items` should be an array of strings')

    let selected = {}
    names.forEach(name => {
      selected[name] = value[name]
    })
    return selected
  }
}

function _select_table (value, items) {
  if (is_string(items)) {
    const column = value.data[items]
    if (column === undefined) throw new Error(`table does not have a column named "${items}"`)
    return column
  } else if (is_integer(items)) {
    const names = Object.keys(value.data)
    if (items < 1) throw new Error('column index must be greater than or equal to 1')
    if (items > length(names)) throw new Error('column index must be less than or equal to number of columns')
    const column = value.data[names[items - 1]]
    return column
  } else if (is_array(items)) {
    let selected = {
      type: 'table',
      data: {},
      rows: value.rows
    }
    items.forEach(item => {
      selected.data[item] = _select_table(value, item)
    })
    selected.columns = Object.keys(selected.data).length
    return selected
  }
}
