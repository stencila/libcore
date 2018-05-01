import array from './array'
import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'
import table from './table'

/**
* @title filter
* @name filter
* @summary Filters the data matching the given clause.
*
* @description
*
* Filters data from the provided value (array, table or object) matching given clause (parameters)
* and returns it as an array, table or object.
*
* @param {array|table|object} value The data to be filtered.
* @param {number} clause The clause to be match for filtering.
* @return {array|table|object} The array, table or object containing filtered values matching the clause.
*
* @implem js
*
* @example filter(value, clause)
* @example <caption>Example usage of filter function.</caption>
* // returns ['b', 'c']
* filter(['a', 'b', 'c'],  'index == 2 || value == "c"')
*
*/

export default function filter (value, clause) {
  if (is_array(value)) return _filter_array(value, clause)
  else if (is_table(value)) return _filter_table(value, clause)
  else if (is_object(value)) return _filter_object(value, clause)
  else throw new Error('parameter `value` must be an array, an object, or a table')
}

function _filter_array (value, clause) {
  let matcher = new Function('index', 'value', `return ${clause}`) // eslint-disable-line no-new-func
  let matched = []
  value.forEach((value, index) => {
    if (matcher(index + 1, value)) matched.push(value)
  })
  return matched
}

function _filter_object (value, clause) {
  let matcher = new Function('name', 'value', `return ${clause}`) // eslint-disable-line no-new-func
  let matched = {}
  Object.keys(value).forEach(name => {
    if (matcher(name, value[name])) matched[name] = value[name]
  })
  return matched
}

function _filter_table (value, clause) {
  let matcher = new Function('row', 'object', `with(object) { return ${clause} }`) // eslint-disable-line no-new-func
  let matched = []
  array(value).forEach((object, row) => {
    if (matcher(row + 1, object)) matched.push(object)
  })
  if (matched.length) return table(matched)
  else {
    const columns = {}
    for (let name of Object.keys(value.data)) {
      columns[name] = []
    }
    return table(columns)
  }
}
