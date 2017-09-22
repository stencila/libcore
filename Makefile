all: setup run

setup:
	npm install
	pip install -r requirements.txt

run:
	node make.js
	python make.py
	Rscript make.r
