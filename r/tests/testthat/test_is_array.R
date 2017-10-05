test_that("is_array", {
  expect_equal(is_array(vector()), TRUE)
  expect_equal(is_array(1:10), TRUE)

  expect_equal(is_array(vector(mode = "logical"), "boolean"), TRUE)
  expect_equal(is_array(vector(mode = "integer"), "integer"), TRUE)
  expect_equal(is_array(vector(mode = "numeric"), "number"), TRUE)
})
