## `stencila/mini-core` : core Mini functions

This the Mini Core Library, a library of functions that are built in to Stencila's [Mini language](https://github.com/stencila/mini). It is to Mini what [Excel functions](https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188) are to Excel, the [Python Standard Library](https://docs.python.org/3/library/index.html) is to Python, the [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html) is to R, etc, etc.

Mini is intentionally simple. Instead of trying to be a complete programming language it being a "glue" between other languages. Mini functions can be implemented in a variety of languages. This allows functions to be implemented using the best language for the job. And when a function is implemented in multiple languages, this approach allows for the optimization of function calls based on implementation speed and data location.

To make contributions easier this is a separate repo from the other Stencila repos. Function implementations are tested and compiled here to be used in the core [`stencila/stencila`](https://github.com/stencila/stencila) repo and the language package repos e.g. [`stencila/r`](https://github.com/stencila/r).

### Organisation

Each function is defined in a `.fun.xml` with implementations able to be defined in sibling source files (e.g. `sum.fun.xml` and `sum.js`). 

This standard library of Mini functions uses a single namespace. However, to make navigation in this repo a little easier, functions are grouped by broad category:

- `base`: type inspection and coercion e.g. `type`
- `math`: mathematics and trigonometry e.g. `square`, `cos`
- `prob`: probability e.g. `pdf_normal`, `random_uniform`
- `stats`: statistics e.g. `var`, `sd`, `cor`
- `text` : text handling and processing e.g. `join`
- `visu` : data visualization e.g. `plot`

### Develop

Although the core [`stencila/stencila`](https://github.com/stencila/stencila) repo is implemented in Javascript, we want to make it as easy as possible for users of other languages to contribute functions using the tools they are familiar with. Regardless, of which language you use, this repo is intentionally not dependent upon the other Stencila repos e.g. `stencila/stencila`, [`stencila/r`](https://github.com/stencila/r), [`stencila/py`](https://github.com/stencila/py). Instead, we use standard XML processing packages for each language to "compile" and test function implementations.

**This is in early development, not everything described here is implemented yet**

#### Writing a function

See `.template.fun.xml` for a complete set of possible XML tags that can be used to define a function.

#### Compiling functions

Functions need to be defined within execution contexts before they can be called. This can be done in two ways:

- dynamically, by passing the function implementation to the execution context at start up time (or possibly just before it is called ie. "JIT compilation"). This approach is used for custom user Functions that are defined at runtime (see [`FunctionDocument.define`](https://github.com/stencila/stencila/blob/bloody-edge/src/function/FunctionDocument.js#L45))

- statically, by extracting the function implementation code and "compiling" them into a package. This package can then be imported into the execution context in the standard way for the particular language (e.g. `import * from 'stencila-lib` in Javascript, `library('stencila_lib)` in R). The advantage of this approach is that it is much faster particularly for external language contexts. The build tools in this repo create the language specific implementation packages (e.g. `build/r/lib.R`) for this approach.

#### Testing functions

The `<tests>` element is used here to define tests that are independent of the implementation language. It is a way to ensure that the behavior of a function does not vary between implementations. After building the functions you can test them by running each test for a function against the compiled implementation.


Follow the instructions below to compile and test function implementations for your favorite programming language(s).

#### Javascript

To test and compile all function implementations for Javascript:

```bash
npm install
node make.js
```

This will produce:

- `build/func.js` : A dictionary of XML `Function` definitions to be loaded into `stencila/stencila` for function documentation, reflection (e.g. function call tips) and dispatching. Currently, this file contains the entire XML file for each function. However, when using a statically compiled version of function definitions the size of this bundle could be reduces by stripping out the `<implems>` and  `<tests>` elements, leaving only the descriptive elements needed for the user interface.

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