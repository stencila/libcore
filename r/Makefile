all: setup test cover

setup:
	Rscript -e 'install.packages(c("devtools", "roxygen2", "lintr", testthat", "covr"),repo="http://cloud.r-project.org/")'

lint:
	Rscript -e 'lintr::lint_package()'

test:
	Rscript -e 'devtools::test()'

cover:
	Rscript -e 'covr::package_coverage()'
