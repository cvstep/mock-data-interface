'use strict';
var fs = require('fs');

process.env.DATABASE_NAME = process.env.DATABASE_NAME || 'tna-dev';

module.exports = {
  https: {
    key: fs.readFileSync('.ssl/server.key'),
    cert: fs.readFileSync('.ssl/server.crt'),
    requestCert: false,
    rejectUnauthorized: false
  },
  port: process.env.PORT || 3000,

};
