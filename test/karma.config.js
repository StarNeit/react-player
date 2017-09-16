import webpackConfig from '../webpack.config.babel'

export default function (config) {
  config.set({
    browsers: process.env.TRAVIS ? [ 'ChromeHeadless' ] : [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai' ],
    files: [
      'karma.webpack.js'
    ],
    preprocessors: {
      'karma.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha', 'coverage' ],
    webpack: {
      ...webpackConfig,
      devtool: 'inline-source-map'
    },
    webpackServer: {
      noInfo: true
    },
    client: {
      mocha: {
        timeout: 60000
      }
    },
    browserNoActivityTimeout: 60000,
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcov', subdir: '.' }
      ]
    }
  })
}
