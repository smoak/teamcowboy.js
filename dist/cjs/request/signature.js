"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const sha1_1 = __importDefault(require("crypto-js/sha1"));
const body_1 = require("./body");
const sha1hash = (input) => {
    return (0, sha1_1.default)(input).toString();
};
const create = ({ privateApiKey, httpMethod, params, }) => {
    const requestBody = (0, body_1.create)(params);
    const requestStr = [
        privateApiKey,
        httpMethod.toUpperCase(),
        params.method,
        params.timestamp,
        params.nonce,
        requestBody,
    ].join("|");
    return sha1hash(requestStr);
};
exports.create = create;
