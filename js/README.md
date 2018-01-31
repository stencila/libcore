## Stencila Core Library implemented in Javascript

### Install

```bash
npm install
```

### Create

Each function needs an XML file in the `../xml` folder. If necessary, create a new function using [`../xml/.fun.xml`] as a template. 

### Implement

In the revelant `.fun.xml` file (an existing one, or one which you created above) add a `<implem language="js">` element under `<implems>`. This registers the implementation with the Stencila execution engine.

Create the Javascript function in the relevant `./src/*.js` file with the same name as the function e.g. `function sum(x)...` for `sum.fun.xml`.

If your implementation overloads parameter types then you will need to handle that in the implementation.

Currently, the following are available in the global environment:

- [jStat](http://jstat.github.io/)
- [stdlib](https://stdlib.io/)

### Test

Run all tests in Node.js:

```bash
npm test
```

Run a single test in Node.js

```bash
npm run test-one -- test/sum.js
```

Run all tests in the browser:

```bash
npm run test-browser
```

then open `test/index.html`.

To watch source code and run tests on changes use the `-w` flag to `make.js`

```bash
node make test -w
```

```bash
node make test:browser -w
```

### Try

You can try out functions in the browser developer console by building the distribution:

```bash
npm run build
```

then open `index.html`.

