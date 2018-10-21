'use strict';
var dataProvider = require('../../../data/participants/{participantId}/archive.js');
/**
 * Operations on /participants/{participantId}/archive
 */
module.exports = {
    /**
     * summary: Get archive strings by participantId
     * description: 
     * parameters: participantId, pageSize, pageNumber
     * produces: application/json
     * responses: 200, default
     */
    get: function getArchive(req, res, next) {
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
     * summary: Create document in participantId archive
     * description: 
     * parameters: participantId, file, title, eventCode, internalPath
     * produces: application/json
     * responses: 200, default
     */
    post: function postArchive(req, res, next) {
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
