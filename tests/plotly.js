import tape from 'tape'
import clone from '../src/clone'
import plotly from '../src/plotly'

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const y = [0, 2, 1, 5, 4, 3, 6, 7, 9, 8]

tape('plotly', function (t) {
  render(plotly({ x, y, mode: 'markers'}))
  t.end()
})

function render (spec, label) {
  if (typeof window === 'undefined') return

  let plots = document.getElementById('plotlys')
  
  if (label) {
    let h3 = document.createElement('h3')
    h3.innerHTML = label
    plots.appendChild(h3)
  }

  let plot = document.createElement('div')
  let options = { 
    // Find button names at https://github.com/plotly/plotly.js/blob/master/src/components/modebar/buttons.js
    modeBarButtonsToRemove: [
      'sendDataToCloud', 
      'autoScale2d', 
      'hoverClosestCartesian', 'hoverCompareCartesian', 
      'lasso2d', 'select2d'
    ], 
    displaylogo: false, 
    showTips: true
  }

  // `Plotly.plot` modifies the spec, use a copy of the so that it can be used in 
  // subsequent test assertions
  let copy = clone(spec)

  Plotly.plot(plot, copy.traces, copy.layout, options)
  plots.appendChild(plot)
}
