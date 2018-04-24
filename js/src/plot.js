import is_array from './is_array'
import is_table from './is_table'
import length from './length'
import { merge } from 'lodash-es'
import sequence from './sequence'
import table from './table'
import title_case from './title_case'


/**
* @title plot
* @name plot
* @summary Create a plot.
*
* @description Creates a plot or a table of plots.
*
* @param {array|table} arg1 The table or array of values to be plotted.
* @param {array|table} arg2 The nest table or array to be plotted. You can pass as many arguments as you want.
* @returns {plot} A new plot.
*
* @implem js
* @example <caption>Example usage of plot function.</caption>
* // returns plot
* // const z = [0, -2, 1, -5, -4, -3, -6, -7, -9, -8]
* plot(z)
*
* @author Nokome Bentley
*
*/

export default function plot (arg1, arg2, ...args) {
  if (is_table(arg1)) return _plot_table(arg1, arg2, ...args)
  else if (is_array(arg1)) {
    if (is_array(arg2)) return _plot_array_array(arg1, arg2, ...args)
    else return _plot_array(arg1, arg2, ...args)
  }
  else throw new Error('Must be called with a table as the first argument or two arrays as the first two arguments')
}

function _plot_array(y, ...args) {
  return _plot_table(table({
    x: sequence(1, length(y)),
    y: y
  }), ...args)
}

function _plot_array_array(x, y, ...args) {
  return _plot_table(table({
    x: x,
    y: y
  }), ...args)
}

function _plot_table(table, x, y, options = {}) {
  const columns = Object.keys(table.data)

  if (!x) {
    if (columns.indexOf('x') > -1) x = 'x'
    else x = columns[0]
  }

  if (!y) {
    if (columns.indexOf('y') > -1) y = 'y'
    else y = columns[1]
  }

  let opacity = 0.5

  let size = 10

  let trace = {
    type: 'scatter',
    mode: 'markers',
    x: table.data[x],
    y: table.data[y],
    marker: {
      opacity: opacity,
      size: size,
      sizemode: 'area'
    }
  }

  let layout = options

  layout.xaxis = layout.xaxis || {}
  layout.xaxis.title = layout.xaxis.title || title_case(x)

  layout.yaxis = layout.yaxis || {}
  layout.yaxis.title = layout.yaxis.title || title_case(y)

  // Layout settings that are currently not optional

  const axisSettings = {
    linecolor: 'black',
    linewidth: 1,
    mirror: true, // By apply to both x and y, creates a bounding box
    ticks: 'outside',
    showspikes: false // Don't show "spikes"
  }
  merge(layout.xaxis, axisSettings)
  merge(layout.yaxis, axisSettings)

  layout.margin = {
    l: 50,
    r: 50,
    t: 40,
    b: 50
  }

  return {
    type: 'plotly',
    traces: [trace],
    layout: layout
  }
}
