ttest <- function(x, y, options) {
  result <- stats::t.test(x, y, paired = options$paired)
  list(
    '_class' = 't-test-result'
  )
}
