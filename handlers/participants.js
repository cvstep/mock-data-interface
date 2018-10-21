'use strict';
var dataProvider = require('../data/participants.js');
/**
 * Operations on /participants
 */
module.exports = {
    /**
     * summary: Create new participant
     * description: Creates new participant. Perform necessary business operations like sending welcome email.

     * parameters: participantForm
     * produces: application/json
     * responses: 200, default
     */
    post: function createParticipant(req, res, next) {
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
