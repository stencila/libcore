<!--- Generated documentation. Do not edit! -->

# `type` : Get the type name of a value

### Parameters

Name | Type | Default | Description
---- | ---- | ------- | -----------
`value` | any |  |The value for which the type is wanted


### Description

A base function that returns the type name e.g. "number" of a value

### Examples

Get the type of an integer literal
```mini
type(42)
```

Get the type of a one-dimensional array of Sheet cells
```mini
type(A1:A10)
```

Get the type of a two-dimensional array of Sheet cells
```mini
type(A1:D5)
```

<p class="tools">
  <a class="edit button" href="https://github.com/stencila/libcore/edit/master/defs/type.fun.xml" target="_blank">Improve the docs 🖉</a>
  <a class="code button" href="https://github.com/stencila/libcore/blob/master/js/src/type.js" target="_blank">See the code 👁</a>
</p>
