'use strict';
var dataProvider = require('../../../data/participants/{participantId}/exams.js');
/**
 * Operations on /participants/{participantId}/exams
 */
module.exports = {
    /**
     * summary: Get exam review Data by participantId
     * description: 
     * parameters: participantId, eventCode
     * produces: application/json
     * responses: 200, default
     */
    get: function getExamReview(req, res, next) {
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
