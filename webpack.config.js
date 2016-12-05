const getConfig = require('hjs-webpack')

module.exports = getConfig({
  // Entry point for the app.
  in: 'src/index.js',
  // Name of the output directory    
  out: 'public',
  // Check if we are running on a development environment.
  isDev: process.env.NODE_ENV !== 'production',
  output: {
    // Our build file name will include a hash.
    hash: true,
  },
  // Reset our outpus folder on each build.
  clearBeforeBuild: true,
})