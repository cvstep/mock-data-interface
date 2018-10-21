'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /participants/{participantId}/registrations/{eventCode}
 */
module.exports = {
    /**
     * summary: Get registrationId by participantID and eventCode
     * description: 
     * parameters: participantId, eventCode
     * produces: application/json
     * responses: 200
     * operationId: getRegistrationId
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/registrations/{eventCode}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
