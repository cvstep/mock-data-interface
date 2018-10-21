'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /events/webinars
 */
module.exports = {
    /**
     * summary: Get current webinar sessions
     * description: This function returns the list of webinar sessions for current and future
webinars

     * parameters: 
     * produces: application/json
     * responses: 200, default
     * operationId: getWebinarSessions
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/webinars',
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
                path: '/events/webinars',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
