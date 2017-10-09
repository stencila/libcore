import is_array from './is_array'
import is_object from './is_table'

export default function clone(value) {
  if (is_array(value)) return value.slice()
  else if (is_object(value)) return Object.assign({}, value)
  else return value
}
