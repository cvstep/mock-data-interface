'use strict';
var fs = require('fs');

process.env.DATABASE_NAME = process.env.DATABASE_NAME || 'tna';

module.exports = {
	ip: process.env.ip || undefined,
	port: process.env.PORT || 3000
};
