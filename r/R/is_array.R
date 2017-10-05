is_array <- function(value, type = "any") {
  assert(is_string(type), "`type` parameter must be a string")

  if (type == "any") is.vector(value)
  else {
    mode <- switch(type,
      boolean = "logical",
      integer = "integer",
      number = "numeric",
      string = "character"
    )
    is.vector(value, mode = mode)
  }
}
