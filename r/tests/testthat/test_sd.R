test_that("sd", {
  expect_equal(sd(1:10), stats::sd(1:10))
  expect_equal(sd(c(1, 1, 1)), 0)

  expect_error(sd(c("a", "b")), "parameter `value` must be an `array\\[number\\]`")
})
