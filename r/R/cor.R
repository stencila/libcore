cor <- function(x, y) {
  assert(is_array(x, "number"), "`x` parameter must be an array[number]")
  assert(is_array(y, "number"), "`y` parameter must be an array[number]")
  assert(
    length(x) == length(y),
    "`x` and `y` parameters must be the same length"
  )

  stats::cor(x, y)
}
