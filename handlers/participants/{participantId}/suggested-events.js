'use strict';
var dataProvider = require('../../../data/participants/{participantId}/suggested-events.js');
/**
 * Operations on /participants/{participantId}/suggested-events
 */
module.exports = {
    /**
     * summary: Get suggested courses by participantId
     * description: Returns a list of suggested courses for the user
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     */
    get: function getSuggestCourses(req, res, next) {
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
