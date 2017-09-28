all: setup compile

setup:
	npm install
	pip install -r requirements.txt

compile:
	node make.js
	python make.py
	Rscript make.R

test:
	node build/js/lib.js
	python build/py/lib.py
	Rscript build/r/lib.R
