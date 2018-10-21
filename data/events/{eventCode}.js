'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /events/{eventCode}
 */
module.exports = {
    /**
     * summary: Get event data by eventCode
     * description: 
     * parameters: eventCode
     * produces: application/json
     * responses: 200
     * operationId: getEvent
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/{eventCode}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
