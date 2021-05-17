"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putOrder = void 0;
var loadOrderList_1 = require("./loadOrderList");
var putOrder = function (newOrder, callback) {
    try {
        var orders = loadOrderList_1.loadOrders();
        var token = 1234;
        orders.push(newOrder);
        callback("undefined", newOrder);
    }
    catch (e) {
        return "Error 405  - Invalid input";
    }
};
exports.putOrder = putOrder;
