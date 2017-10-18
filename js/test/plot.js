import tape from 'tape'
import plot from '../src/plot.js'
import table from '../src/table.js'

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const y = [0, 2, 1, 5, 4, 3, 6, 7, 9, 8]
const z = [0, -2, 1, -5, -4, -3, -6, -7, -9, -8]
const table1 = table({
  x: x,
  y: y
})
const table2 = table({
  var1: x,
  var2: y
})

tape('plot', function (t) {
  // Plotting a single array
  const plot0 = plot(z)
  t.deepEqual(plot0.traces[0].x, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  t.deepEqual(plot0.traces[0].y, z)
  render(plot0, 'Plot single array (is used as y')

  // Plotting two arrays
  const plot1 = plot(x, y)
  t.equal(plot1.type, 'plotly')
  t.deepEqual(plot1.traces[0].x, x)
  t.deepEqual(plot1.traces[0].y, y)
  render(plot1, 'Plot two arrays (first is x, second is y)')

  // Plotting a table with `x` and `y` columns
  const plot2 = plot(table1)
  t.deepEqual(plot2, plot1)

  // Plotting a table with `x` and `y` taken 
  // from first two columns
  const plot3 = plot(table2)
  t.deepEqual(plot3, plot1)

  // Plotting a table with `x` and `y` defined
  // explicitly
  const plot4 = plot(table2, 'var1', 'var2')
  t.deepEqual(plot4, plot1)

  t.end()
})

function render (spec, label) {
  if (typeof window === 'undefined') return

  let plots = document.getElementById('plots')
  
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
  Plotly.plot(plot, spec.traces, spec.layout, options)
  plots.appendChild(plot)
}
