test_that("execute:values", {
  expect_equal(execute(TRUE), TRUE)
})

test_that("execute:call", {
  expect_equal(execute(list(
    type = 'call',
    func = function(a,b) a + b,
    args = c(2, 3)
  )), 5)
})
