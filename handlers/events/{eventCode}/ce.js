'use strict';
var dataProvider = require('../../../data/events/{eventCode}/ce.js');
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
     */
    get: function getEventCE(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
