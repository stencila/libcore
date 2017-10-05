is_integer <- function(x) {
  if (length(x) == 1) {
    if (is.integer(x)) return(TRUE)
    else if (is.numeric(x)) return(x[1] %% 1 == 0)
  }
  FALSE
}
