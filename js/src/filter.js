import array from './array'
import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'
import table from './table'

+/**
+@title filter
+@summary
+
+@description
+
+Flters data from the provided value (array, table or object) matching given clause (parameters)
+and returns it as an array, table or object.
+
+@param {array|table|object} value The tested value
+@param {number} clause The lower bound of the range.
+@return {array|table|object} The array, table or object containing filtered values matching the clause.
+
+@example filter(value, clause)
+@example <caption>Example usage of filter function.</caption>
+@example filter(['a', 'b', 'c'],  'index == 2 || value == "c"')
+@example returns ['b', 'c']
+ */


export default function filter(value, clause) {
  if (is_array(value)) return _filter_array(value, clause)
  else if (is_table(value)) return _filter_table(value, clause)
  else if (is_object(value)) return _filter_object(value, clause)
  else throw new Error('parameter `value` must be an array, an object, or a table')
}

function _filter_array (value, clause) {
  let matcher = new Function('index', 'value', `return ${clause}`)
  let matched = []
  value.forEach((value, index) => {
    if (matcher(index+1, value)) matched.push(value)
  })
  return matched
}

function _filter_object (value, clause) {
  let matcher = new Function('name', 'value', `return ${clause}`)
  let matched = {}
  Object.keys(value).forEach(name => {
    if (matcher(name, value[name])) matched[name] = value[name]
  })
  return matched
}

function _filter_table (value, clause) {
  let matcher = new Function('row', 'object', `with(object) { return ${clause} }`)
  let matched = []
  array(value).forEach((object, row) => {
    if (matcher(row+1, object)) matched.push(object)
  })
  return table(matched)
}
