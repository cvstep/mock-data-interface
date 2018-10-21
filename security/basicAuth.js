'use strict';
/**
 * Authorize function for securityDefinitions:basicAuth
 * type : basic
 * description: HTTPS Basic Authentication. Should only be over `HTTPS`
** User Name and Password**
* User Name: `user`
* Password: `pass`

 */
var passport = require('passport');

var BasicStrategy = require('passport-http').BasicStrategy;

module.exports = function authorize(req, res, next) {
    //The context('this') for authorize will be bound to the 'securityDefinition'


    //Perform auth here

    next();
};
