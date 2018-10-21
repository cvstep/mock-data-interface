'use strict';
var dataProvider = require('../../../data/events/online/scores.js');
/**
 * Operations on /events/online/scores
 */
module.exports = {
    /**
     * summary: Post self-paced course grades
     * description: Post Self-paced Courses
     * parameters: OLScores
     * produces: application/json, application/x-www-form-urlencoded
     * responses: 200, default
     */
    post: function postOLScores(req, res, next) {
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
