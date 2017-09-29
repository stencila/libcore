import json from 'rollup-plugin-json'

export default {
  input: 'test/index.js',
  output: {
    file: 'build/test.cjs.js',
    format: 'cjs'
  },
  plugins: [ json() ],
  external: ['jstat', '@stdlib/stdlib', 'tape']
}
