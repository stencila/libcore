import equal from './equal'

export default function not_equal (value, other) {
  return !equal(value, other)
}
