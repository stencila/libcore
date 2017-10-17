import matplotlib
import matplotlib.figure
import pandas


def type(value):
    type_ = __builtins__['type'](value).__name__

    if value is None:
        return 'null'
    elif type_ == 'bool':
        return 'boolean'
    elif type_ == 'int':
        return 'integer'
    elif type_ == 'float':
        return 'number'
    elif type_ == 'str':
        return 'string'
    elif (
            isinstance(
                value,
                (matplotlib.figure.Figure, matplotlib.artist.Artist)
            ) or (
                type_ == 'list' and len(value) == 1 and isinstance(
                    value[0], matplotlib.artist.Artist
                )
            )
    ):
        # Use the special 'matplotlib' type to identify plot values that need
        # to be converted to the standard 'image' type during `pack()`
        return 'matplotlib'
    elif type_ in ('tuple', 'list'):
        return 'array'
    elif type_ == 'dict':
        type_ = value.get('type')
        if type_ and isinstance(type_, str):
            return type_
        return 'object'
    elif isinstance(value, pandas.DataFrame):
        return 'table'
    else:
        raise RuntimeError('Unknown type "%s"' % type_)
