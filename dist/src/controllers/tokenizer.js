"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
var tokenizer = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result = result + (characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.toString();
};
exports.tokenizer = tokenizer;
