'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /ce/guide
 */
module.exports = {
    /**
     * summary: Get approvals by state, program, or designation
     * description: 
     * parameters: state, program, designation
     * produces: application/json
     * responses: 200, default
     * operationId: getCEGuides
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/ce/guide',
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
                path: '/ce/guide',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
