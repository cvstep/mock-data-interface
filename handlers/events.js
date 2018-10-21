'use strict';
var dataProvider = require('../data/events.js');
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
     */
    get: function getEvents(req, res, next) {
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
