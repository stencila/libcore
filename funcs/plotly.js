import { merge } from 'lodash-es'

import is_array from './is_array'

/*
  This is an adapter for using plotly.

  It is merely bringing the input data into an appropriate
  format and returns an object that is rendered by the PlotlyValueComponent.
*/
export default function plotly (traces, layout) {
  // TODO: make it convenient to use this function using transclusions

  // allowing for a single trace
  if (!is_array(traces)) traces = [traces]
  layout = layout || {}

  
  layout.xaxis = layout.xaxis || {}
  layout.yaxis = layout.yaxis || {}
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
    traces,
    layout
  }
}
