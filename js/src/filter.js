import table from './table'
import array from './array'

export default function filter(value, clause) {
  let matcher = new Function('row', `
    with(row) {
      return eval('${clause}')
    }
  `)
  let rows = array(value)
  return table(rows.filter(matcher))
}
