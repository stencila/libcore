export default function is_syntax (value) {
  return value.type === 'symbol' || value.type === 'call'
}
