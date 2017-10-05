col <- function(table, column) {
  assert(is_table(table), "`table` parameter must be a table")
  if (is_integer(column)) {
    if (column < 0) {
      stop("`column` parameter must be greater than zero")
    }
    if (column > ncol(table)) {
      stop("`column` parameter is greater than the number of columns in table")
    }
  } else if (is_string(column)) {
    if (!(column %in% colnames(table))) {
      stop("`column` parameter does not match a column name in table")
    }
  } else {
    stop("`column` parameter must be an integer or a string")
  }

  table[, column]
}
