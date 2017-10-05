all: setup test cover

setup:
	Rscript -e 'install.packages(c("devtools","testthat","covr"),repo="http://cloud.r-project.org/")'

test:
	Rscript -e 'devtools::test()'

cover:
	Rscript -e 'covr::package_coverage()'
