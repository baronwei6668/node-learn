'use strict'
// const { defaultExclude } = require('test-exclude')
// const isWindows = require('is-windows')
// let platformExclude = [isWindows() ? 'lib/posix.js' : 'lib/win32.js']

module.exports = {
  all: false,
  'check-coverage': true,
  reporter: ['lcov', 'text-summary'],
  'report-dir': './.nyc_output/coverage',
  'temp-dir': './.nyc_output/temp'
  // include:
  // skip-full
  // exclude: platformExclude.concat(defaultExclude)
}
