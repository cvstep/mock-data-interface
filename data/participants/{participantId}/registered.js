'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/registered
 */
module.exports = {
    /**
     * summary: Get registered participants by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getRegisteredParticipants
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/registered',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/registered',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
