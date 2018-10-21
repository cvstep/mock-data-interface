'use strict';
var dataProvider = require('../../../data/participants/{participantId}/password.js');
/**
 * Operations on /participants/{participantId}/password
 */
module.exports = {
    /**
     * summary: Update user password by participantId
     * description: 
     * parameters: participantId, userPasswordForm
     * produces: application/json
     * responses: 200
     */
    put: function putPassword(req, res, next) {
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
