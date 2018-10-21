'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/ce-requests
 */
module.exports = {
    /**
     * summary: Get continuing education data by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getCERequest
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/ce-requests',
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
                path: '/participants/{participantId}/ce-requests',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
