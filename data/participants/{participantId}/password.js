'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/password
 */
module.exports = {
    /**
     * summary: Update user password by participantId
     * description: 
     * parameters: participantId, userPasswordForm
     * produces: application/json
     * responses: 200
     * operationId: putPassword
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/password',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
