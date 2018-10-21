module.exports = {
  dev: {
    script: './server.js',
    options: {
      env: {
      },
      ext: 'js',
      verbose: true,
      nodeArgs: ['--debug'],
      ignore: ['logs/**/*', 'test.log', 'Gruntfile.js']
    }
  }
};
