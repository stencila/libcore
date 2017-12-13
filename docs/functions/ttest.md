<!--- Generated documentation. Do not edit! -->

# `ttest` : One-sample and paired Student's t-Test on arrays of numbers

### Parameters

Name | Type | Default | Description
---- | ---- | ------- | -----------
`x` | array[number] |  |
`y` | array[number] | `` | 
`mu` | string | `0` | The hypothesized true mean under the null hypothesis.
`tails` | integer | `"two-sided"` | Whether the alternative hypothesis is that the mean of x (or difference between x and y) is larger than mu (1, i.e. "one-sided greater than"), smaller than mu (-1, i.e. "one-sided less than") or equal to mu (0, i.e. "two-sided").
`paired` | boolean | `false` | Perform a paired t-test?
`alpha` | number | `0.5` | Number in the interval [0,1] giving the significance level of the hypothesis test.


### Description



### Examples

Perform a one sided, 
```mini
ttest(x, y, tails=-1)
```

<p class="tools">
  <a class="edit button" href="https://github.com/stencila/libcore/edit/master/defs/ttest.fun.xml" target="_blank">Improve the docs 🖉</a>
  <a class="code button" href="https://github.com/stencila/libcore/blob/master/js/src/ttest.js" target="_blank">See the code 👁</a>
</p>
