cor <- function(x, y) {

 #' Pearson correlation
 #'
 #' Calculates the Pearson correlation between x and y
 #' @param x array[number] . The first value to be correlated
 #' @param y array[number] . The second value to be correlated
 #' @return number The Pearson correlation between two values.

  assert(is_array(x, "number"), "`x` parameter must be an array[number]")
  assert(is_array(y, "number"), "`y` parameter must be an array[number]")
  assert(length(x) == length(y), "`x` and `y` parameters must be the same length")

  stats::cor(x, y)
}
