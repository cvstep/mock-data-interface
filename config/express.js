'use strict';

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');
var config =  require('./index');
var passport = require('passport');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');

// export the express configuration function
module.exports = initExpress;

/**
 * Configure the express application by adding middleware and setting application
 * variables.
 * @param {express.app} app - The express application instance to configure
 */
function initExpress(app) {
	var env = app.get('env');
	//var publicDir = path.join(config.root, config.publicDir);
	//app.set('ip', config.ip);
	app.set('port', config.port);

  app.use(compression());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());


	app.use(passport.initialize());
  app.use(passport.session());
  app.use(swaggerize({
    api: path.resolve('./config/swagger.yaml'),
    handlers: './handlers',
    basedir:  path.resolve(config.root),
    security: './security',
    docspath: '/docs'
  }));
 // console.trace(require('util').inspect(app.swagger.routes , {depth:5}), config.root)
  app.use('/swagger', swaggerUi({docs: '/docs', swaggerUiPath: 'assets/dist'}));
  if ('production' === env) {
    app.use(morgan('tiny'));
  }

  if ('development' === env || 'staging' === env) {
    console.log('In development Mode')
    app.use(morgan('combined'));
    // Error handler - has to be last
    app.use(errorHandler());
  }
}
