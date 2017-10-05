test_that("is_boolean", {
  expect_equal(is_boolean(TRUE), TRUE)
  expect_equal(is_boolean(FALSE), TRUE)
  expect_equal(is_boolean(vector(mode = "logical", length = 1)), TRUE)

  expect_equal(is_boolean(vector(mode = "logical", length = 3)), FALSE)
  expect_equal(is_boolean(c(TRUE, FALSE)), FALSE)
  expect_equal(is_boolean(1), FALSE)
  expect_equal(is_boolean("string"), FALSE)
})
