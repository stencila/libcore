import glob
import lxml.etree

# For checking that the same function name is not used twice
names = {}

# The compiled module of Python Function implementations
lib = open('build/lib.py', 'w')

for path in glob.glob('**/*.fun.xml'):
    print path
    with open(path) as file:
        doc = lxml.etree.parse(file)
        name = doc.xpath('/function/name')[0].text
        for implem in doc.xpath('/function/implems/implem[@language="py"]'):
            types = implem.xpath('./types/type/@type')
            signat = '_'.join(['mini', name] + types)
            code = implem.xpath('./code')[0].text

            lib.write('def %s():\n    %s\n' % (signat, code))
