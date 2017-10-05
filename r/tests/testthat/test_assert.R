test_that('assert', {
  expect_equal(assert(1==1, 'one should equal one'), TRUE)
  expect_error(assert(1==3, 'one should equal one'), 'one should equal one')
})
