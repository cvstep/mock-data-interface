'use strict';
var dataProvider = require('../../../../data/events/{eventCode}/waitlist/{participantId}.js');
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
     */
    post: function postEventWaitlist(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
