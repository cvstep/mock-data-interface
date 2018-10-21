/*eslint global-require: 0*/
module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    force: true,
    jshintrc: true
  },
  server: ['Gruntfile.js',
           'server.js',
           'grunt/**/*.js',
           'config/**/*.js'],
  test: ['test/**/*.js'],
  data: ['data/**/*.js'],
  handlers: ['handlers/**/*.js', '!handlers/**/*spec.js'],
  security: ['security/**/*.js', '!security/**/*spec.js']
};
