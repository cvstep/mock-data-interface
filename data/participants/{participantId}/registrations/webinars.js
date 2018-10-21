'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /participants/{participantId}/registrations/webinars
 */
module.exports = {
    /**
     * summary: Get webinar registrations by participantId
     * description: Returns a list of the user&#39;s current webinar registrations.
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getWebinarRegistrations
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/registrations/webinars',
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
                path: '/participants/{participantId}/registrations/webinars',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
