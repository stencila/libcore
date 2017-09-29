let b = require('substance-bundler')

b.task('build', () => {
  b.js('./src/index.js', {
    dest: './build/minicore.js',
    format: 'umd',
    moduleName: 'minicore',
    external: ['jstat', '@stdlib/stdlib'],
    globals: {
    'jstat': 'jStat',
    '@stdlib/stdlib': 'stdlib'
    },
    json: true
  })
})

b.task('default', ['build'])
