test_that("var", {
  expect_equal(var(1:10), stats::var(1:10))
  expect_equal(var(c(1, 1, 1)), 0)

  expect_error(var(c("a", "b")), "parameter `value` must be an `array\\[number\\]`")
})
