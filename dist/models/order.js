"use strict";
exports.__esModule = true;
exports.order = void 0;
var tokenizer_1 = require("../controllers/tokenizer");
var order = /** @class */ (function () {
    function order(newCustomerId, orderId, newSneakerList, newShipDate, newCity) {
        this.customerId = newCustomerId;
        this.orderId = orderId;
        this.sneakerList = newSneakerList;
        this.shipDate = newShipDate;
        this.status = "placed";
        this.complete = false;
        this.token = tokenizer_1.tokenizer(10);
        this.city = newCity;
    }
    return order;
}());
exports.order = order;
