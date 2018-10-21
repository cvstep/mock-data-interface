'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: postAffidavit
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/affidavit',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/affidavit',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
