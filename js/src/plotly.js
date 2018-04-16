import is_array from './is_array'

/*
  This is an adapter for using plotly.

  It is merely bringing the input data into an appropriate
  format and returns an object that is rendered by the PlotlyValueComponent.
*/

+/**
+@title plotly
+@summary Create a plot object that can be rendered using Plotly.
+
+@description
+
+This documentation is based on (Plotly)(https://plot.ly/javascript/).
+Creates a configuration for a Plotly plot.
+
+@param {any} traces The tested value
+@param {object} layout The lower bound of the range.
+@return {plot} True if the value is between lower and upper, else false.
+
+@example plotly(traces, layout)
+@example <caption>Example usage of plotly function.</caption>
+returns plot
+@example plotly()
+ /*


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
