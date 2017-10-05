test_that("is_table", {
  expect_equal(is_table(data.frame()), TRUE)
  expect_equal(is_table(data.frame(a = 1:10)), TRUE)

  expect_equal(is_table(letters), FALSE)
  expect_equal(is_table(list()), FALSE)
  expect_equal(is_table(3.14), FALSE)
})
