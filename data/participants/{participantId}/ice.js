'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /participants/{participantId}/ice
 */
module.exports = {
    /**
     * summary: Get ICE form data by participantId
     * description: 
     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getICEForm
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/ice',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/ice',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
