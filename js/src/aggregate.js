import array from './array'
import assert from './assert'
import is_array from './is_array'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import length from './length'
import table from './table'

export default function aggregate(value, by, summaries) {
  if (is_array(value)) return _aggregate_array(value, by, summaries)
  else if (is_table(value)) return _aggregate_table(value, by, summaries)
  else throw new Error('parameter `value` must be an array or a table')
}

function _aggregate_array (value, by, summaries) {
  assert(is_array(by), 'parameter `by` must be an array')
  assert(length(by) === length(value), 'parameter `by` must be the same length as `value` array')
  assert(is_object(summaries), 'parameter `summaries` must be an object')

  let groups = {}
  value.forEach(function(item, index) {
    const group = by[index]
    if (groups[group]) groups[group].push(item)
    else groups[group] = [item]
  })
  let aggregated = {
    group: Object.keys(groups)
  }
  Object.keys(summaries).forEach(function(summary) {
    // It is not possible to use a Function here because it does not
    // use the module's scope as a closure so does not have access to summary
    // functions like `min`, `mean`, `sum` etc
    // let summariser = new Function('values', `return ${summaries[summary]}`)
    let summariser = function(values) { return eval(summaries[summary]) }
    aggregated[summary] = Object.keys(groups).map(group => summariser(groups[group]))
  })
  return table(aggregated)
}

function _aggregate_table (value, by, summaries) {
  assert(is_object(summaries), 'parameter `summaries` must be an object')
  assert(is_string(by) || is_array(by, 'string'), 'parameter `by` must be a string, or an array of strings')
  by = array(by)

  let groups = {}
  for (let row = 0; row < value.rows; row++) {
    let group = []
    by.forEach(function(name) {
      let grouper = value.data[name]
      if (typeof grouper === 'undefined') throw new Error(`table does not have column '${name}'`)
      group.push(grouper[row])
    })
    // TODO Better way to greate a unique key from an array of values
    let key = group.map(value => value.toString()).join('_@_@_')
    if (groups[key]) {
      for (let name of Object.keys(value.data)) groups[key][name].push(value.data[name][row])
    } else {
      groups[key] = {}
      for (let name of Object.keys(value.data)) groups[key][name] = [value.data[name][row]]
    }
  }
  let aggregated = {}
  by.forEach(function(name) {
    aggregated[name] = []
  })
  Object.keys(summaries).forEach(function(summary) {
    aggregated[summary] = []
  })
  Object.keys(groups).forEach(function(key) {
    let group = groups[key]
    by.forEach(function(name) {
      aggregated[name].push(group[name][0])
    })
    Object.keys(summaries).forEach(function(summary) {
      let summariser = function(group) { return eval(summaries[summary]) }
      aggregated[summary].push(summariser(group))
    })
  })
  return table(aggregated)
}
