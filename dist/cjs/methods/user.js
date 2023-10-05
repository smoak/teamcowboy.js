"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMethods = void 0;
const index_1 = __importDefault(require("./user/index"));
const userMethods = (client) => (0, index_1.default)(client);
exports.userMethods = userMethods;
