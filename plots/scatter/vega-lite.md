```vega-lite()
{
  data: {
  	values: data
  },
  mark: 'point',
  encoding: {
    x: {
    	field: x,
    	type: 'quantitative'
    },
    y: {
    	field: y,
    	type: 'quantitative'
    }
  }
}
```
