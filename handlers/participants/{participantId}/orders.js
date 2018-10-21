'use strict';
var dataProvider = require('../../../data/participants/{participantId}/orders.js');
/**
 * Operations on /participants/{participantId}/orders
 */
module.exports = {
    /**
     * summary: Create new order for participantId
     * description: It includes the products ordered, the participant data for
the product, if required. It also sends the payment, billing
and/or shipping information.

     * parameters: participantId, orderData
     * produces: application/json
     * responses: 200, default
     */
    post: function postOrder(req, res, next) {
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
