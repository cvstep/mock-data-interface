'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /participants/auth
 */
module.exports = {
    /**
     * summary: Login user by userinfo and password
     * description: Log the user on and returns the LogonToken.
     * parameters: logonForm
     * produces: application/json
     * responses: 200
     * operationId: authorize
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/auth',
                operation: 'post',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Get participantId by logonToken
     * description: This function is designed to be used to logon users from links in emails or other marketing materials. It is rather unsafe, but is included for historical reasons.
     * parameters: 
     * produces: application/json
     * responses: 200
     * operationId: getPIdByLogonToken
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/auth',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
