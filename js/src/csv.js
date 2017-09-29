import d3 from 'd3'
import table from './table'

export default function csv (content) {
  let arrayOfObject = d3.csvParse(content).map(row => {
    let converted = {}
    for (let field in row) {
      if (!row.hasOwnProperty(field)) continue
      let str = row[field]
      let flt = parseFloat(str)
      converted[field] = isNaN(flt) ? str : flt
    }
    return converted
  })
  return table(arrayOfObject)
}
