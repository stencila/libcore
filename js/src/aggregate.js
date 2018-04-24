import array from './array'
import assert from './assert'
import is_array from './is_array'
import is_object from './is_object'
import is_string from './is_string'
import is_table from './is_table'
import length from './length'
import table from './table'

/**
* @title aggregate
* @summary Aggregate values by the specified variable(s) using summary function(s).
*
* @description
*
* Aggregates values provided either in an array or a table. If the values come in an array,
* the variables to aggregate by must also be an array of the same length. If the values come
* in a table, the variables to aggregate by must be strings corresponding to the table column
* names. The summary function(s) used for aggregation need to be provided as an object. You can
* use the typical summary functions such as 'sum', 'min', 'max' and so on.
*
* @param {(array|table)} value The values to be aggregated. Must be either array or table.
* @param {(array|string)} by The variable(s) for the value to be aggregated by. Must be either string or array.
* @param {any} summaries The summary function(s) to be used for aggregation. Must be an object.
* @return {(table|array)} Aggregated data in table or array.
*
* @implem js
* @example aggregate(value, by, summaries)
*
* @example <caption>Example usage of aggregate function.</caption>
* // returns table({
* region: ['N', 'S', 'W', 'E'],
* min_v1: [1, 3, 5, 9],
* sum_v2: [2, 2, 4, 1]})
*
* @example
* // @const table1 = table({
* region: ['N', 'N', 'S', 'S', 'W', 'W', 'W', 'W', 'E'],
* v1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
* v2: [1, 1, 1, 1, 1, 1, 1, 1, 1]
* })
* aggregate(table1, 'region',{min_v1:'min(group.v1)', sum_v2:'sum(group.v2)' } )
*/


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
  for (let row = 0; row < value.rows; row**) {
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
