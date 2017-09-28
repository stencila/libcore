
cor_arraynumber_arraynumber <- stats::cor

cor_kendall_arraynumber_arraynumber <- function(x, y) stats::cor(x, y, method = 'kendall')

cor_spearman_arraynumber_arraynumber <- function(x, y) stats::cor(x, y, method = 'spearman')

cov_arraynumber_arraynumber <- stats::cov

sd_arraynumber <- stats::sd

var_arraynumber <- stats::var
