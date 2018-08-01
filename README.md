## `stencila/libcore` : core function library

[![experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](http://github.com/badges/stability-badges)
[![Code coverage](https://codecov.io/gh/stencila/libcore/branch/master/graph/badge.svg)](https://codecov.io/gh/stencila/libcore)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.stenci.la)
[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)

This the Stencila Core Library, a library of functions that are built in to Stencila's [Mini language](https://github.com/stencila/mini). It is to Stencila what [Excel functions](https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188) are to Excel, the [Python Standard Library](https://docs.python.org/3/library/index.html) is to Python, the [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html) is to R, etc, etc.

[See the comprehensive list of LibCore functions.](https://github.com/stencila/libcore/tree/master/funcs)

Want to contribute a function to Libcore? [See the contribution guidelines.](https://github.com/stencila/libcore/blob/master/CONTRIBUTING.md).

Stencila functions can be implemented, and used, in a variety of languages. Mini is intentionally simple. Instead of trying to be a complete programming language, it focuses on being a "glue" between other languages. This allows functions to be implemented using the best language for the job. And when a function is implemented in multiple languages, this approach allows for the optimization of function calls based on implementation speed and data location. [Learn more about Mini](https://github.com/stencila/mini).

### [`meta`](meta)

A folder for cordinating design and implementations of functions across langages.

### [`funcs`](funcs)

A folder containing source code for LibCore. Each function is defined in a separate files. The functions are written 
in JavaScript (since Mini is written in this language).

### [`tests`](tests)
A folder containing tests for LibCore functions. 


