
[Stencila Core Library](https://github.com/stencila/libcore) (LibCore) is a library of functions that are built into Stencila's [Mini][mini] language. The default implementation of Mini is done in [Javascript](https://github.com/stencila/libcore/tree/master/js). That is, in fact, Mini calls upon Javascript operations. The default implementation in Javascript allows for performing work in Stencila only by the means of a browser. Users who do not have access to other execution contexts (R, Python and so forth) are still able to manipulate their data.

However, CoreLib has also implementation in other languages (for example, in [R](https://github.com/stencila/libcore/tree/master/r) and in [Python](https://github.com/stencila/libcore/tree/master/py)). In fact, CoreLib functions  can be implemented, and used, in a variety of languages. Mini is intentionally simple. Instead of trying to be a complete programming language, it focuses on being a "glue" between other languages. This allows functions to be implemented using the best language for the job. And when a function is implemented in multiple languages, this approach allows for the optimization of function calls based on implementation speed and data location

The scope of the Stencila Core Library is corresponding with:
 * a standard set of functions available in most popular spreadsheet applications (for example, in [Excel]((https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188));
 * [Python Standard Library](https://docs.python.org/3/library/index.html);
 * [R Base Package](https://stat.ethz.ch/R-manual/R-devel/library/base/html/00Index.html).

See detailed guidelines on how to [contriubute to the LibCore](https://github.com/stencila/libcore/blob/master/CONTRIBUTING.md).

[mini]: languages/mini/README.md
