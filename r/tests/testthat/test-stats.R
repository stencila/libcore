context('stats')

test_that('cor_arraynumber_arraynumber', {
  expect_equal(cor_arraynumber_arraynumber(1:10, 1:10), 1)
})
