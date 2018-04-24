## `stencila/libcore` : core function library

[![experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](http://github.com/badges/stability-badges)
[![Code coverage](https://codecov.io/gh/stencila/libcore/branch/master/graph/badge.svg)](https://codecov.io/gh/stencila/libcore)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.stenci.la)
[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)

This the Stencila Core Library, a library of functions that are built in to Stencila's [Mini language](https://github.com/stencila/mini). It is to Stencila what [Excel functions](https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188) are to Excel, the [Python Standard Library](https://docs.python.org/3/library/index.html) is to Python, the [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html) is to R, etc, etc.

Want to see a list of functions currently implemented in Stencila? Check out our list of functions [here](https://stencila.github.io/libcore/#/).

Want to contribute a function to Libcore? More on contributing to Libcore [here](https://github.com/stencila/libcore/blob/master/CONTRIBUTING.md).

Stencila functions can be implemented, and used, in a variety of languages. Mini is intentionally simple. Instead of trying to be a complete programming language, it focuses on being a "glue" between other languages. This allows functions to be implemented using the best language for the job. And when a function is implemented in multiple languages, this approach allows for the optimization of function calls based on implementation speed and data location. Learn more about Mini [here](https://github.com/stencila/mini).

### [`meta`](meta)

A folder for cordinating design and implementations of functions across langages.

### [`docs`](docs)

A folder for documentation for each function, and additional documentation for Libcore.
### [`defs`](defs)
Source files for each function. 

### [`js`](js)

A Javascript package of function implementations. See the [`js/README.md`](js#readme) for instructions.
