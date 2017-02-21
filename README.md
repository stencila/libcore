## `stencila/lib` : Stencila component library

[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)

This repository is the Stencila component library. It contains components (i.e. documents, sheets) that you might find useful in composing your own data driven content. Think of it as a big box of Lego blocks for building data driven documents! (Only, because were just getting started it's a very small box at present :smile:)

### Install

You don't need to install anything, each component is downloaded on demand as you use them (see below). 

### Use

Whenever you use the `lib` scheme for an address, Stencila will attempt to download the component from here. For example, here is an example of an `include` directive within a Stencila Markdown document,

```
< lib://plots/scatter/vega-lite.md@0.1 (data=cars, x='horsepower', y='mpg')
```

That will fetch version `0.1` of the file [`plots/scatterplot/vega-lite.md`](plots/scatterplot/vega-lite.md) - a simple Stencila Document for creating a scatterplot - from this repository, set it's variables `data`, `x` and `y` to the specified values, execute the embedded code to generate the scatteplot and intert it into the including document.

Note that because the `lib` address schem is the default you could also write the above as:

```
< plots/scatter/vega-lite.md@0.1 (data=cars, x='horsepower', y='mpg')
```

### Discuss

We love feedback. Create a [new issue](https://github.com/stencila/js/issues/new), add to [existing issues](https://github.com/stencila/js/issues) or [chat](https://gitter.im/stencila/stencila) with members of the community.


### Develop

Want to add a new component to the library or help fix an existing one? Great! To get started, read our contributor [code of conduct](CONDUCT.md), then just send us a pull request or [get in touch](https://gitter.im/stencila/stencila).
