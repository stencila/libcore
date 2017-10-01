## XML

This folder contains XML defintions for each function.

Each function needs an XML file in the `../xml` folder. If necessary, create a new function using [`../xml/.fun.xml`] as a template. 

The `<tests>` element is used here to define tests that are independent of the implementation language. It is a way to ensure that the behavior of a function does not vary between implementations. After building the functions you can test them by running each test for a function against the compiled implementation.
