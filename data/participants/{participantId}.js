'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getUserData
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}',
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
                path: '/participants/{participantId}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update user data by participantId
     * description: 
     * parameters: participantId, userForm
     * produces: application/json
     * responses: 200
     * operationId: updateParticipantData
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
