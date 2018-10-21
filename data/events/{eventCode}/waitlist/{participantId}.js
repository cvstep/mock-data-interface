'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /events/{eventCode}/waitlist/{participantId}
 */
module.exports = {
    /**
     * summary: Create a waitlist entry for user by eventCode
     * description: 
     * parameters: participantId, eventCode
     * produces: application/json
     * responses: 200
     * operationId: postEventWaitlist
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/events/{eventCode}/waitlist/{participantId}',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
