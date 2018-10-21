'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /designations
 */
module.exports = {
    /**
     * summary: Get list of designations
     * description: This function returns the list of designations

     * parameters: 
     * produces: application/json
     * responses: 200, default
     * operationId: getDesignations
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/designations',
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
                path: '/designations',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
