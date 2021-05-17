"use strict";
exports.__esModule = true;
var express = require("express");
var sneaker_1 = require("./router/sneaker");
var order_1 = require("./router/order");
var app = express();
app.use(express.json());
app.use(sneaker_1.SneakerRouter);
app.use(order_1.orderRouter);
app.listen(3001, function () {
    console.log('Server is up on port 3001.');
});
