test_that("is_integer", {
  expect_equal(is_integer(42), TRUE)
  expect_equal(is_integer(-100), TRUE)
  expect_equal(is_integer(vector(mode = "integer", length = 1)), TRUE)

  expect_equal(is_integer(vector(mode = "integer", length = 3)), FALSE)
  expect_equal(is_integer(c(1, 2, 3)), FALSE)
  expect_equal(is_integer(3.14), FALSE)
  expect_equal(is_integer("string"), FALSE)
})
