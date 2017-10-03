## `stencila/libcore` : core function library

[![experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](http://github.com/badges/stability-badges)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.stenci.la)
[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)

This the Stencila Core Library, a library of functions that are built in to Stencila's [Mini language](https://github.com/stencila/mini). It is to Stencila what [Excel functions](https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188) are to Excel, the [Python Standard Library](https://docs.python.org/3/library/index.html) is to Python, the [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html) is to R, etc, etc.

Mini is intentionally simple. Instead of trying to be a complete programming language, it focuses on being a "glue" between other languages. Stencila functions can be implemented, and used, in a variety of languages. This allows functions to be implemented using the best language for the job. And when a function is implemented in multiple languages, this approach allows for the optimization of function calls based on implementation speed and data location.

### [`meta`](meta)

The [`meta`](meta) folder is for cordinating design and implementations of functions across langages.

### [`xml`](xml)

Each function is defined in a `xml/*.fun.xml` file and implemented in one or more of the language packages.

### [`js`](js)

A Javascript package of function implementations. See the [`js/README.md`](js#readme) for instructions.

### [`py`](js)

A Python package of function implementations. See the [`py/README.d`](py#readme) for instructions.

### [`r`](r)

A R package of function implementations. See the [`r/README.md`](js#readme) for instructions.

### `Makefile`

To compile and test packages for all languages:

```bash
make compile
make test
```
