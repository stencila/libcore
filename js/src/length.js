import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'

export default function length(value) {
  if (is_array(value)) return value.length
  else if (is_table(value)) return value.rows
  else if (is_object(value)) return Object.keys(value).length
  else return 1
}
