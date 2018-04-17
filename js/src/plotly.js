import is_array from './is_array'

/*
  This is an adapter for using plotly.

  It is merely bringing the input data into an appropriate
  format and returns an object that is rendered by the PlotlyValueComponent.
*/

/**
* @title plotly
* @name plotly
* @summary Create a plot object that can be rendered using Plotly.
*
* @description
*
* This documentation is based on (Plotly)(https://plot.ly/javascript/).
* Create Plotly object to be passed as the configuration for creating a Plotly plot.
*
* @param {array|obj|number} traces The data to be plotted
* @param {string} layout The type of Plotly chart. For detailed list, see https://plot.ly/javascript/reference
* @return {obj} Plotly object.
*
* @example plotly(traces, layout)
* @example <caption>Example usage of plotly function.</caption>
*
* @example plotly( {x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23},)
* @example returns {type: 'plotly', traces: '', layout: 'bar'
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
