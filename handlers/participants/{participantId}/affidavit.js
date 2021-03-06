'use strict';
var dataProvider = require('../../../data/participants/{participantId}/affidavit.js');
/**
 * Operations on /participants/{participantId}/affidavit
 */
module.exports = {
    /**
     * summary: Create affidavit in archive by participantId
     * description: 
     * parameters: participantId, affidavitForm
     * produces: application/json
     * responses: 200, default
     */
    post: function postAffidavit(req, res, next) {
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
