## Mini Core Library functions implemented in Javascript

### Install

```bash
npm install
```

### Create

Each function needs an XML file in the `../xml` folder. If necessary, create a new function using [`../xml/.fun.xml`] as a template. 

### Implement

In the revelant `.fun.xml` file (an existing one, or one which you created above) add a `<implem language="js">` element under `<implems>`. This registers the implementation with the Stencila execution engine.

Create the Javascript function in the relevant `./src/*.js` file with the same name as the Mini function e.g. `function sum(x)...` for `sum.fun.xml`.

If your implementation overloads parameter types then you need to add those type names to the function signature. e.g. `function sum_arraynumber(x)`, `function sum_matrixnumber(x)`

Currently, the following are available in the global environment:

- [jStat](http://jstat.github.io/)
- [stdlib](https://stdlib.io/)

### Test

Run all tests in Node.js:

```bash
npm test
```

Run all tests in the browser:

```bash
npm run test-browser
```

then open `test/index.html`.

### Try

You can try out functions in the browser developer console by building the distribution:

```bash
npm run build
```

then open `index.html`.

### Check

Check that the Javascript functions the you have implemented match the XML definitions:

```bash
npm run check
```

This will also produce `build/func.js` : A dictionary of XML `Function` definitions to be loaded into `stencila/stencila` for function documentation, reflection (e.g. function call tips) and dispatching. Currently, this file contains the entire XML file for each function.
