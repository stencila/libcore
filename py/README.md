## Stencila Core Library implemented in Python

### Create

See the [`meta`](../meta) folder for which functions are the highest priority for implementation. Each function needs an XML file in the `../xml` folder. If necessary, create a new function using `../xml/.fun.xml` as a template. 

### Implement

In the revelant `.fun.xml` file (an existing one, or one which you created above) add a `<implem language="py">` element under `<implems>`. This registers your Python implementation with the Stencila execution engine.

Create the Python function implementation in a `.py` file in the `libcore` folder e.g. `libcore/sum.py` for the `sum` function.

### Test

To test your function implementation, create a new test file in the `tests` folder e.g. `tests/test_sum.py` for the `sum` function. 

Install some useful Python packages for package development and testing, if you don't already have them,

```bash
pip install setuptools wheel tox twine pylint
# or
make setup
```

Check for lint,

```bash
pylint libcore
# or
make lint
``

Then run all the tests,

```bash
tox
# or
make test
```

Alternatively, you can run the tests and calculate test coverage using,

```bash
tox -e cover
# or
make cover
```
