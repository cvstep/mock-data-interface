'use strict';
var dataProvider = require('../../data/participants/{participantId}.js');
/**
 * Operations on /participants/{participantId}
 */
module.exports = {
    /**
     * summary: Get Participant data by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     */
    get: function getUserData(req, res, next) {
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
    },
    /**
     * summary: Update user data by participantId
     * description: 
     * parameters: participantId, userForm
     * produces: application/json
     * responses: 200
     */
    put: function updateParticipantData(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
