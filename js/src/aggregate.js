import assert from './assert'
import evaluate from './evaluate'
import is_array from './is_array'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import length from './length'
import symbol from './symbol'
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
    aggregated[summary] = Object.keys(groups).map(group => evaluate(summaries[summary], groups[group]))
  })
  return table(aggregated)
}

function _aggregate_table (value, by, summaries) {
  assert(is_object(summaries), 'parameter `summaries` must be an object')
  assert(is_string(by) || is_array(by, 'string') || is_object(by), 'parameter `by` must be a string, an array of strings, or an object')
  
  let byEncoding = {}
  if (is_string(by)) {
    byEncoding[by] = symbol(by)
  } else if (is_array(by, 'string')) {
    by.forEach(function(name) {
      byEncoding[name] = symbol(name)
    })
  } else {
    byEncoding = by
  }
  
  let groups = {}
  for (let row = 0; row < value.rows; row++) {
    let rowObject = {}
    for (let name of Object.keys(value.data)) rowObject[name] = value.data[name][row]
    
    let key = Object.keys(byEncoding).map(function (name) {
      let value = evaluate(byEncoding[name], rowObject)
      rowObject[name] = value
      return value.toString()
    }).join('_@_@_')
    
    const names = Object.keys(rowObject)
    if (groups[key]) {
      for (let name of names) groups[key][name].push(rowObject[name])
    } else {
      groups[key] = {}
      for (let name of names) groups[key][name] = [rowObject[name]]
    }
  }
  
  let aggregated = {}
  Object.keys(byEncoding).forEach(function(name) {
    aggregated[name] = []
  })
  Object.keys(summaries).forEach(function(name) {
    aggregated[name] = []
  })
  Object.keys(groups).forEach(function(key) {
    let group = groups[key]
    Object.keys(byEncoding).forEach(function(name) {
      aggregated[name].push(group[name][0])
    })
    Object.keys(summaries).forEach(function(name) {
      aggregated[name].push(evaluate(summaries[name], group))
    })
  })
  return table(aggregated)
}
