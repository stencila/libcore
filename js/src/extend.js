import array from './array'
import assert from './assert'
import clone from './clone'
import is_array from './is_array'
import is_object from './is_object'
import is_table from './is_table'
import table from './table'

/**
* @title extend
* @name extend
* @summary Extends the value (array, object or table) with a given extension.
*
*
* @param {array|object|table} value The value to be extended.
* @param {any} extension The extension to be added to the value.
* @return {array|object|table} The extended value.
*
* @example extend(value, extension)
* @example <caption>Example usage of extend function.</caption>
*
* @example extend([1], [2, 3])
* @example returns [1, 2, 3]
*/


export default function extend(value, extensions) {
  if (is_array(value)) return _extend_array(value, extensions)
  else if (is_table(value)) return _extend_table(value, extensions)
  else if (is_object(value)) return _extend_object(value, extensions)
  else throw new Error('parameter `value` must be an array, an object or a table')
}

function _extend_array (value, extensions) {
  assert(is_array(extensions), 'parameter `extensions` must be an array')

  return value.concat(extensions)
}

function _extend_object (value, extensions) {
  assert(is_object(extensions), 'parameter `extensions` must be an object')

  let extended = clone(value)
  Object.keys(extensions).forEach(function(name) {
    let extension = extensions[name]
    let extender = new Function('object', `with(object) { return ${extension} }`)
    extended[name] = extender(extended)
  })
  return extended
}

function _extend_table (value, extensions) {
  assert(is_object(extensions), 'parameter `extensions` must be an object')

  let objects = array(value)
  Object.keys(extensions).forEach(function(name) {
    let extension = extensions[name]
    let extender = new Function('object', `with(object) { return ${extension} }`)
    objects.forEach(function(object) {
      object[name] = extender(object)
    })
  })
  return table(objects)
}
