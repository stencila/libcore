test_that("col", {
  table <- data.frame(a = 1:3, b = c("x", "y", "z"))

  expect_equal(col(table, 1), 1:3)
  expect_equal(col(table, "a"), 1:3)

  expect_error(col(NULL, 1), "`table` parameter must be a table")
  expect_error(
    col(table, FALSE),
    "`column` parameter must be an integer or a string"
  )
  expect_error(
    col(table, -1),
    "`column` parameter must be greater than zero"
  )
  expect_error(
    col(table, "foo"),
    "`column` parameter does not match a column name in table"
  )
})
