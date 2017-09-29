import json from 'rollup-plugin-json'

export default {
  name: 'test',
  input: 'test/index.js',
  output: {
    file: 'build/test.umd.js',
    format: 'umd'
  },
  plugins: [ json() ],
  external: ['jstat', '@stdlib/stdlib', 'tape'],
  globals: {
    'jstat': 'jStat',
    '@stdlib/stdlib': 'stdlib', 
    'tape': 'tape'
  }
}
