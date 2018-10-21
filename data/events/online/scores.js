'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /events/online/scores
 */
module.exports = {
    /**
     * summary: Post self-paced course grades
     * description: Post Self-paced Courses
     * parameters: OLScores
     * produces: application/json, application/x-www-form-urlencoded
     * responses: 200, default
     * operationId: postOLScores
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/online/scores',
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
                path: '/events/online/scores',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
