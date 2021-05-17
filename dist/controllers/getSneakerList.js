"use strict";
exports.__esModule = true;
exports.getSneakerList = void 0;
var fs = require("fs");
exports.getSneakerList = new Promise(function (resolve, rejects) {
    try {
        var dataBuffer = fs.readFileSync('../data/sneakerList.json');
        var dataJSON = dataBuffer.toString();
        resolve(JSON.parse(dataJSON).sneakers);
    }
    catch (e) {
        return "Error 405  - Invalid input";
    }
});
