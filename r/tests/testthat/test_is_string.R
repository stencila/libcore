test_that("is_string", {
  expect_equal(is_string("hello"), TRUE)
  expect_equal(is_string("a"), TRUE)
  expect_equal(is_string(vector(mode = "character", length = 1)), TRUE)

  expect_equal(is_string(vector(mode = "character", length = 3)), FALSE)
  expect_equal(is_string(letters), FALSE)
  expect_equal(is_string(3.14), FALSE)
})
