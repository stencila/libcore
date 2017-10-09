all: setup build

SETUP_PACKAGES := setuptools wheel tox twine pylint

# A local user install is generally recommended
setup:
	pip install --user $(SETUP_PACKAGES)

# A global install is required for Travis as is the extra package `tox-travis`
setup-travis:
	pip install $(SETUP_PACKAGES) tox-travis

build:
	python setup.py bdist_wheel
.PHONY: build

install:
	pip install --user .

lint:
	pylint libcore

test:
	tox

cover:
	tox -e cover
	sed -i "s!.tox/cover/lib/python2.7/site-packages/stencila-libcore/!!g" coverage.xml

clean:
	rm -rf stencila/*.pyc build dist stencila-libcore.egg-info .tox .cache .coverage coverage.xml
