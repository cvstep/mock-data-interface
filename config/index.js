/**
 * @ngdoc object
 * @name config
 * @description
 * This module loads the application configuration depending on the
 * 'NODE_ENV' environment variable.
 *
 * @property {String} env - The environment used in the application
 * @property {String} root - The application root path
 * @property {String} publicDir - The path to public sources
 * @property {String} ip - IP address used to bind the application server
 * @property {String} port - The port used to bind the application server
 * @property {Object} secrets - Holding the session secret used to sign the user session
 * @property {Array} userRoles - Array of available user role names
 * @property {Object} mongo - Configuration that is passed to mongoose to establish a connection
 */
'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

/**
 * Load environment configuration
 */

var common = {
	env: process.env.NODE_ENV,

	root: path.normalize(__dirname + '/..'),

	ip: '0.0.0.0',

	port: process.env.PORT || 3000,

	// Secret for session, you will want to change this and make it an environment variable
	secrets: {
		session: process.env.SESSION_SECRET || 'my-test-secret'
	},

  swagger: {
    docs: '/swagger',
    // SwaggerUiPath: 'node_modules/swagger-ui-master/dist'
    // url:  ,
    // spec:  ,
    // validatorUrl:  ,
    // dom_id:  ,
    // booleanValues:  ,
    // docExpansion:  ,
    // apisSorter:  ,
    // operationsSorter:  ,
    defaultModelRendering: 'model',
    // onComplete:  ,
    // onFailure:  ,
    // highlightSizeThreshold:  ,
    // supportedSubmitMethods:  ,
    // oauth2RedirectUrl:  ,
    showRequestHeaders: true,
    jsonEditor: true,
  },
};
module.exports = _.merge(
	common,
	require('./env/' + process.env.NODE_ENV + '.js') || {}
);
