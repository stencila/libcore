import glob
import lxml.etree
import os
import re

# For checking that the same function name is not used twice
names = []

# The compiled Python module of function implementations
if not os.path.exists('build/py'):
    os.makedirs('build/py')
lib = open('build/py/lib.py', 'w')
lib.write('''# Modules available for functions
import math
import numpy
import types

''')

# Function implementation type regex
def_regex = re.compile(r'^(def\s+\w+)\s*\(')

# For each function...
for path in glob.glob('**/*.fun.xml'):
    print path
    with open(path) as file:
        doc = lxml.etree.parse(file)

        # Check that the function name has not already been used
        name = doc.xpath('/function/name/text()')[0]
        if name in names:
            raise RuntimeError('Function name alredy used: ' + name)
        names.append(name)

        # Get parameter types for the signature
        param_types = doc.xpath('/function/params/param/@type')

        # Extract any Python implementations and put them in the Python package
        for implem in doc.xpath('/function/implems/implem[@language="py"]'):
            types = implem.xpath('./types/type/@type')
            if len(types) == 0:
                types = param_types
            signat = '_'.join([name] + types).replace('[', '_').replace(']', '')
            code = implem.xpath('./code/text()')[0]

            match = def_regex.match(code)
            if match:
                defn = match.group(1)
                lib.write(code.replace(defn, 'def %s' % name) + '\n\n')
            else:
                lib.write('%s = %s\n\n\n' % (name, code))
