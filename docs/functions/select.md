<!--- Generated documentation. Do not edit! -->

# `select` : Select one or more members of a value

### Parameters

Name | Type | Default | Description
---- | ---- | ------- | -----------
`value` | any |  |The value to select values from
`members` | any |  |The members to select from the value


### Description

A general purpose function for selecting members of a compound value (e.g. array, object or table) . When the `members` parameter is an atomic value (e.g. an integer or a string) then a single member is returned. For example, `select(array, 2)` returns
        the second member of an array. When `members` is an array, then one or more members are returned. One-based indexing is used. The dot operator `.` is an alias for `select` with a single string e.g `table.column1` is equaivalent to `select(table,
        'column1')`. The square brackets operator `[]` is an alias for `select` for other member selectors e.g `table[['column1', 'column2']]` is equaivalent to `select(table, ['column1', 'column2'])`.

### Examples


```mini
select(array, index)
```


```mini
select(object, 'property')
```


```mini
select(table, ['column1', 'column2'])
```

<p class="tools">
  <a class="edit button" href="https://github.com/stencila/libcore/edit/master/defs/select.fun.txt" target="_blank">Improve the docs 🖉</a>
  <a class="code button" href="https://github.com/stencila/libcore/blob/master/js/src/select.js" target="_blank">See the code 👁</a>
</p>
