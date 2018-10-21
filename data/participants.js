'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /participants
 */
module.exports = {
    /**
     * summary: Create new participant
     * description: Creates new participant. Perform necessary business operations like sending welcome email.

     * parameters: participantForm
     * produces: application/json
     * responses: 200, default
     * operationId: createParticipant
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
