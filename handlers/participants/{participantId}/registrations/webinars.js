'use strict';
var dataProvider = require('../../../../data/participants/{participantId}/registrations/webinars.js');
/**
 * Operations on /participants/{participantId}/registrations/webinars
 */
module.exports = {
    /**
     * summary: Get webinar registrations by participantId
     * description: Returns a list of the user&#39;s current webinar registrations.
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     */
    get: function getWebinarRegistrations(req, res, next) {
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
