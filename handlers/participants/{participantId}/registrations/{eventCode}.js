'use strict';
var dataProvider = require('../../../../data/participants/{participantId}/registrations/{eventCode}.js');
/**
 * Operations on /participants/{participantId}/registrations/{eventCode}
 */
module.exports = {
    /**
     * summary: Get registrationId by participantID and eventCode
     * description: 
     * parameters: participantId, eventCode
     * produces: application/json
     * responses: 200
     */
    get: function getRegistrationId(req, res, next) {
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
