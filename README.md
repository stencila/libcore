## `stencila/lib` : Stencila Standard Library

This the Stencila Standard Library, a collection of functions that are built in to the Mini language. It is to Stencila what...

- the (Python Standard Library)[https://docs.python.org/3/library/index.html] is to Python
- the (R Base Package)[https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html] is to R
- the (Julia Standard Library)[https://docs.julialang.org/en/latest/stdlib/base] is to Julia

To make contributions easier this is a separate repo from the other Stencila repos. Function implementations are tested and compiled here to be used in the core [`stencila/stencila`](https://github.com/stencila/stencila) repo and the language package repos e.g. [`stencila/r`](https://github.com/stencila/r).

### Develop

#### Javascript

To test and compile all functions for Javascript:

```
npm install
node make.js
```

This will produce:

- `build/func.js` : A dictionary of XML `Function` definitions to be used dynamically in `stencila/stencila`
- `build/lib.js` : A Javascript module of `Function` implementations

#### Python

To test and compile all functions for Python:

```
pip install -r requirements.txt
python make.py
```

This will produce:

- `build/lib.py` : A Python module of `Function` implementations which can be included in `stencila/py`

#### R

To test and compile all functions for R:

```
Rscript make.r
```

This will produce:

- `build/lib.js` : A R script of `Function` implementations which can be included in `stencila/r`
