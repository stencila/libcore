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

