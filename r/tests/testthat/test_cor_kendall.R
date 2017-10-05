test_that("cor_kendall", {
  expect_equal(cor_kendall(1:10, 1:10), 1)
  expect_equal(cor_kendall(10:1, 1:10), -1)

  expect_error(cor_kendall(c("a", "b"), NULL), "`x` parameter must be an array\\[number\\]")
  expect_error(cor_kendall(1:10, NULL), "`y` parameter must be an array\\[number\\]")
  expect_error(cor_kendall(1:10, 1:5), "`x` and `y` parameters must be the same length")
})
