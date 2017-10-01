## Meta

This 'meta' folder is a place for keeping higher-level resources related to the design of the Mini core function library. It's important to design a concise, consistent and coherent set of functions. This is where we coordinate on ehich functions will be added, what they will be called and how they will work with the other functions.

The file [`functions.csv`](functions.csv) is a (currently very preliminary) list of functions with the following columns:

- `category`: broad groups used to aid organisation

	- `base`: type inspection, coercion etc e.g. `type`, `select`
	- `math`: mathematics and trigonometry e.g. `square`, `cos`
	- `prob`: probability e.g. `pdf_normal`, `random_uniform`
	- `stats`: statistics e.g. `var`, `sd`, `cor`
	- `text` : text handling and processing e.g. `join`
	- `visu` : data visualization e.g. `plot`

- `signature`: function signature. e.g `"col(value:table, index:integer): array"` means the `col` function has a `value` parameter of type `table`, and an `index` parameter of type `integer` and returns an array

- `summary`: a brief summary of what the function does

- `xml_exists`: whether an XML file already exists

- `r_equiv`: the equivalent function(s) in R
- `py_equiv`: the equivalent function(s) in Python
- `js_equiv`: the equivalent function(s) in JavaScript
- `excel_equiv`: the equivalent function(s) in Excel

- `notes`: notes on the function e.g. differences in implementations to other languages


It's important that we learn from the design of function libraries in other languages, and where appropriate maintain consistency with them. Some useful references to core function libraries in other languages:

#### Excel

- Microsoft's [Excel function list](https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188)
- [`excel-functions.csv`](excel-functions.csv) (the above list as a CSV file)

#### Python

- [Standard Library docs](https://docs.python.org/3/library/index.html)
- [NumpPy and SciPy docs](https://docs.scipy.org/doc/)

#### R

- [`base` package docs](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html)
- [`stats` package docs](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/00Index.html)

#### Javascript

- [Lodash docs](https://lodash.com/docs/)
- [stdlib's migration guides](https://github.com/stdlib-js/stdlib/tree/develop/docs/migration-guides)
