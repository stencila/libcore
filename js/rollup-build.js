import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  name: 'minicore',
  input: 'src/index.js',
  output: {
    file: 'build/minicore.min.js',
    format: 'umd'
  },
  plugins: [
  	json(),
  	babel({
  	  exclude: 'node_modules/**'
  	}),
  	uglify()
  ],
  external: ['jstat', '@stdlib/stdlib'],
  globals: {
  	'jstat': 'jStat',
    '@stdlib/stdlib': 'stdlib'
  }
}
