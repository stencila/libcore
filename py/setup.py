from setuptools import setup

setup(
    name='stencila-libcore',
    version='0.1.0',

    description='Stencila Core Library implemented in Python',
    url='https://github.com/stencila/libcore',
    license='Apache-2.0',

    author='Nokome Bentley',
    author_email='nokome@stenci.la',

    packages=['libcore'],

    install_requires=[
        'matplotlib',
        'numpy',
        'pandas'
    ]
)
