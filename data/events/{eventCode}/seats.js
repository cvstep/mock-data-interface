'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /events/{eventCode}/seats
 */
module.exports = {
    /**
     * summary: Get number of seats available by eventCode
     * description: 
     * parameters: eventCode
     * produces: application/json
     * responses: 200
     * operationId: getEventSeatsInfo
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/{eventCode}/seats',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
