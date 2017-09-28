## `stencila/lib` : Stencila Standard Library

This the Stencila Standard Library, a collection of functions that are built in to the Mini language. It is to Stencila what...

- the [Python Standard Library](https://docs.python.org/3/library/index.html) is to Python
- the [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html) is to R
- the [Julia Standard Library](https://docs.julialang.org/en/latest/stdlib/base) is to Julia

To make contributions easier this is a separate repo from the other Stencila repos. Function implementations are tested and compiled here to be used in the core [`stencila/stencila`](https://github.com/stencila/stencila) repo and the language package repos e.g. [`stencila/r`](https://github.com/stencila/r).

### Develop

Although the core [`stencila/stencila`](https://github.com/stencila/stencila) repo is implemented in Javascript, we want to make it as easy as possible for users of other languages to contribute functions using the tools they are familiar with. Follow the instructions below to compile and test function implementations for your favorite programming language(s).

**This is in early development, testing of functions is not actually yet implemented, only compiling to packages for each language**

#### Javascript

To test and compile all function implementations for Javascript:

```bash
npm install
node make.js
```

This will produce:

- `build/func.js` : A dictionary of XML `Function` definitions to be loaded into `stencila/stencila` for function documentation, reflection (e.g. function call tips) and dispatching
- `build/js/lib.js` : A Javascript module of `Function` implementations

#### Python

To test and compile all function implementations for Python:

```bash
pip install -r requirements.txt
python make.py
```

This will produce:

- `build/py/lib.py` : A Python module of `Function` implementations which can be included in `stencila/py`

#### R

To test and compile all function implementations for R you need to have the package `XML` installed e.g.

```r
install.packages(c('XML'))
```

Then run the build script,

```bash
Rscript make.r
```

This will produce:

- `build/r/lib.js` : A R script of `Function` implementations which can be included in `stencila/r`

#### All

To compile and test for all languages:

```bash
make compile
make test
```