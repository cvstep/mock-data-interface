'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/suggested-events
 */
module.exports = {
    /**
     * summary: Get suggested courses by participantId
     * description: Returns a list of suggested courses for the user
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getSuggestCourses
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/suggested-events',
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
                path: '/participants/{participantId}/suggested-events',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
