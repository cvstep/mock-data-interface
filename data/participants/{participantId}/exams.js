'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/exams
 */
module.exports = {
    /**
     * summary: Get exam review Data by participantId
     * description: 
     * parameters: participantId, eventCode
     * produces: application/json
     * responses: 200, default
     * operationId: getExamReview
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/exams',
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
                path: '/participants/{participantId}/exams',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
