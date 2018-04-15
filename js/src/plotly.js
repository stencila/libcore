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
  return {
    type: 'plotly',
    traces,
    layout
  }
}
