'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/passes
 */
module.exports = {
    /**
     * summary: Get pass data by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getPasses
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/passes',
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
                path: '/participants/{participantId}/passes',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
