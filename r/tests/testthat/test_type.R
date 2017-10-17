test_that("type", {
  expect_equal(type(NULL), "null")

  expect_equal(type(TRUE), "boolean")
  expect_equal(type(FALSE), "boolean")

  expect_equal(type(as.integer(42)), "integer")
  expect_equal(type(as.integer(1000000000)), "integer")

  expect_equal(type(3.14), "number")
  expect_equal(type(pi), "number")
  expect_equal(type(1.1e-20), "number")

  expect_equal(type(""), "string")
  expect_equal(type("Yo!"), "string")

  expect_equal(type(vector()), "array")
  expect_equal(type(c(1, 2, 3)), "array")

  expect_equal(type(list()), "object")
  expect_equal(type(list(a = 1, b = 2)), "object")
  expect_equal(type(list(type = "custom")), "custom")

  expect_equal(type(data.frame(a = 1:10, b = 11:20)), "table")

  func <- function () {
  }
  expect_equal(type(func), "unknown")
})
