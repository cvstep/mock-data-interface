'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /events/{eventCode}/ce
 */
module.exports = {
    /**
     * summary: Get continuing education approvals by eventCode filtered by state
     * description: 
     * parameters: eventCode, state
     * produces: application/json
     * responses: 200
     * operationId: getEventCE
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/{eventCode}/ce',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
