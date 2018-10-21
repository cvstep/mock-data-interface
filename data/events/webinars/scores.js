'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /events/webinars/scores
 */
module.exports = {
    /**
     * summary: Create webinar scores for registrationId
     * description: Save webinar scores
     * parameters: WBScores
     * produces: application/json
     * responses: 200, default
     * operationId: postWebinarScores
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/webinars/scores',
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
                path: '/events/webinars/scores',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
