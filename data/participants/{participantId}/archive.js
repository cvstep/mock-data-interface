'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: getArchive
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/archive',
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
                path: '/participants/{participantId}/archive',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Create document in participantId archive
     * description: 
     * parameters: participantId, file, title, eventCode, internalPath
     * produces: application/json
     * responses: 200, default
     * operationId: postArchive
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{participantId}/archive',
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
                path: '/participants/{participantId}/archive',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
