'use strict';
var dataProvider = require('../../../data/events/webinars/scores.js');
/**
 * Operations on /events/webinars/scores
 */
module.exports = {
    /**
     * summary: Create webinar scores for registrationId
     * description: Save webinar scores
     * parameters: WBScores
     * produces: application/json
     * responses: 200, default
     */
    post: function postWebinarScores(req, res, next) {
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
