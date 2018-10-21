/*eslint global-require: 0*/
/*eslint func-names: 0*/
/*eslint max-statements: 0*/

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  var options = {
    config: { src: 'grunt/*.js' },
    pkg: grunt.file.readJSON('package.json'),
    distPath: 'dist',
    lodash: require('lodash')
  };
  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);
  grunt.registerTask('deploy', [
    'test',
    'build'
    //'shell:ebDeploy'
  ]);
  grunt.registerTask('dev', [
    'build',
    'concurrent'
  ]);
  grunt.registerTask('test', [
    'eslint',
    'jshint',
    'shell:cover'
  ]);
  grunt.registerTask('build', [
    'clean',
    'concat',
    'shell:build',
    'shell:swaggerize'
  ]);
  grunt.registerTask('docs', [
    'clean:docs',
    'ngdocs'
  ]);

  grunt.registerTask('default', ['test', 'dev']);
};
