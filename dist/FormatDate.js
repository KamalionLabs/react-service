"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = function (data) {
    return data.replace(new RegExp("/", "g"), ".");
};
