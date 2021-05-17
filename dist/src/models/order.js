"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
var tokenizer_1 = require("../controllers/tokenizer");
var order = /** @class */ (function () {
    function order(newCustomerId, newSneakerList, newShipDate) {
        this.customerId = newCustomerId;
        this.orderId = tokenizer_1.tokenizer(5);
        this.sneakerList = newSneakerList;
        this.shipDate = newShipDate;
        this.status = "placed";
        this.complete = false;
        this.token = tokenizer_1.tokenizer(10);
    }
    return order;
}());
exports.order = order;
