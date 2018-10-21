'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /events
 */
module.exports = {
    /**
     * summary: Get all events
     * description: 
     * parameters: pageSize, pageNumber, request
     * produces: application/json
     * responses: 200
     * operationId: getEvents
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
