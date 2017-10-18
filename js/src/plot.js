import is_array from './is_array'
import is_table from './is_table'
import length from './length'
import sequence from './sequence'
import table from './table'

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

function _plot_table(table, x, y) {
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

  return {
    type: 'plotly',
    traces: [{
      type: 'scatter',
      mode: 'markers',
      x: table.data[x],
      y: table.data[y],
      marker: {
        opacity: opacity,
        size: size,
        sizemode: 'area'
      }
    }],
    layout: {
      // 
      showspikes: false
    }
  }
}

