'use strict';
var dataProvider = require('../../../data/participants/{participantId}/designations.js');
/**
 * Operations on /participants/{participantId}/designations
 */
module.exports = {
    /**
     * summary: Get participant designations by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     */
    get: function getPartDesignations(req, res, next) {
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
