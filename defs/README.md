This folder contains definitions for each function in libcore. Functions are written by the core Stencila team and contributed by the community. For more on how to contribute a function or talk to the team about functions you'd like to see, see our [Libcore CONTRIBUTING.md](https://github.com/stencila/libcore/blob/master/docs/CONTRIBUTING.md). 

We welcome contibutors at all levels and have plenty of [good first functions - coming soon!] that are ideal for people looking to learn more about writing functions.

Below, the two function formats - .txt and .XML - are described and annotated.

## fun.txt
Writing a txt file that describes a function is the best way for new function writers to contribute. 

### Definitions and syntax for fun.txt functions
`@` :identifies a standard [JsDoc tag](http://usejsdoc.org/)
`category`: broad groups used to aid organisation, listed below:

	- `base`: type inspection, coercion etc e.g. `type`, `select`
	- `math`: mathematics and trigonometry e.g. `square`, `cos`
	- `prob`: probability e.g. `pdf_normal`, `random_uniform`
	- `stats`: statistics e.g. `var`, `sd`, `cor`
	- `text` : text handling and processing e.g. `join`
	- `visu` : data visualization e.g. `plot`

### Fun.txt template
Create a file in your favorite text editor called function-name.fun.txt where function-name is the name of the specific function you are contributing. Copy the txt template below into your file and replace the quoted text with information specific to the function.

```
@name "function-name (make it specific and short)"
@title "function-name"
@summary "What does the function do (specific and short!)
@category pick one category from the list above!

@description 

A longer description that expands the summary. 

@param {number} arguments or parameters to a function 
@param {number} another argument or parameter to a funciton
@return {number} result of the function

@example how is the function written? for multiply, multiply(x, y)
@example any other ways the function can be written. For multiply, x * y

@implem langauge which will implement the function, which may be js, r, or py

@author Your name!
```



## fun.XML

If you prefer to work in XML, that works too! This folder contains XML defintions for each function.

Each function needs an XML file in the `../xml` folder. If necessary, create a new function using [`../xml/.fun.xml`] as a template. 

The `<tests>` element is used here to define tests that are independent of the implementation language. It is a way to ensure that the behavior of a function does not vary between implementations. After building the functions you can test them by running each test for a function against the compiled implementation.
