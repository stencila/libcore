export default function is_table (value) {
  return typeof value === 'object' && value.type === 'table'
}
