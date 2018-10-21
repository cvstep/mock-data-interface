'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/designations
 */
module.exports = {
    /**
     * summary: Get participant designations by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getPartDesignations
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/designations',
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
                path: '/participants/{participantId}/designations',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
