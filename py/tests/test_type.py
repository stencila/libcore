from libcore import type


def test_type():
    assert type(None) == 'null'

    assert type(True) == 'boolean'
    assert type(False) == 'boolean'

    assert type(42) == 'integer'
    assert type(1000000000) == 'integer'

    assert type(3.14) == 'number'
    assert type(1.1e-20) == 'number'

    assert type('') == 'string'
    assert type('Yo!') == 'string'

    assert type(list()) == 'array'
    assert type([1, 2, 3]) == 'array'
    assert type(tuple()) == 'array'
    assert type((1, 2, 3)) == 'array'

    assert type(dict()) == 'object'
    assert type(dict(a=1, b=2)) == 'object'

    assert type(dict(type='html', content='<img>')) == 'html'
    assert type(dict(type='image', content='')) == 'image'
    assert type(dict(type=1)) == 'object'
