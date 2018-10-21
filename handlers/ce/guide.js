'use strict';
var dataProvider = require('../../data/ce/guide.js');
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
     */
    get: function getCEGuides(req, res, next) {
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
    }
};
