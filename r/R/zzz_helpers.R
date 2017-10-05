# Helper functions
# e.g. to provide consistency and reduce repetition when wrapping other functions

.wrap_array_number <- function (func, arg) {
  assert(is_array(arg, "number"), "parameter `value` must be an `array[number]`")

  func(arg)
}
