'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/auth/reset-password
 */
module.exports = {
    /**
     * summary: Start password reset process by participant email.
     * description: 
     * parameters: resetForm
     * produces: application/json
     * responses: 200
     * operationId: resetPassword
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/auth/reset-password',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
