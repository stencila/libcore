library(XML)

# For checking that the same function name is not used twice
names <- NULL

# The compiled R package of function implementations
dir.create('build/r', showWarnings = FALSE, recursive = TRUE)
lib <- file('build/r/lib.R', 'w')

# For each function...
for (path in Sys.glob('**/*.fun.xml')) {
  cat(path, '\n')
  doc <- xmlParse(path)
  
  # Check that the function name has not already been used
  name <- xmlValue(getNodeSet(doc, '/function/name/text()')[[1]])
  if (length(names)>0 && (name %in% names)) stop('Function name already used:', name)
  else names <- c(names, name)
  
  # Get parameter types for the signature
  param_types <- unlist(getNodeSet(doc, '/function/params/param/@type'))

  # Extract any R implementations and put them in the R package
  for (implem in getNodeSet(doc, '/function/implems/implem[@language="r"]')) {
    types <- unlist(getNodeSet(implem, './types/type/@type'))
    if (is.null(types)) types <- param_types
    signat <- paste0(c(name, types), collapse = '_')
    signat <- gsub('\\]', '', gsub('\\[', '_', signat))
    code <- xmlValue(getNodeSet(implem, './code/text()')[[1]])
    cat('#\' @export ', signat, '\n', signat, ' <- ', code, '\n\n', sep = '', file = lib)
  }
}
