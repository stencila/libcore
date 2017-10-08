import array from './array'
import assert from './assert'
import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'

export default function select(value, items) {
  if (is_array(value)) return _select_array(value, items)
  else if (is_table(value)) return _select_table(value, items)
  else if (is_object(value)) return _select_object(value, items)
  else throw new Error('parameter `value` must be an array, an object, or a table')
}

function _select_array (value, items) {
  let indices = array(items)
  assert(is_array(indices, 'integer'), 'parameter `items` should be an integer or an array of integers')

  return array(indices).map(index => value[index-1])
}

function _select_object (value, items) {
  let names = array(items)
  assert(is_array(names, 'string'), 'parameter `items` should be a string or an array of strings')

  let selected = {}
  names.forEach(name => {
    selected[name] = value[name]
  })
  return selected
}

function _select_table (value, items) {
  let names = array(items)
  assert(is_array(names, 'string'), 'parameter `items` should be a string or an array of strings')

  let selected = {
    type: 'table',
    data: {},
    rows: value.rows
  }
  names.forEach(name => {
    selected.data[name] = value.data[name]
  })
  selected.columns = Object.keys(selected.data).length
  return selected
}
