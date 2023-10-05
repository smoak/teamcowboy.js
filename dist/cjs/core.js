"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCowboy = void 0;
const universal_user_agent_1 = require("universal-user-agent");
const version_1 = require("./version");
const axios_1 = __importDefault(require("axios"));
const test_1 = require("./methods/test");
const auth_1 = require("./methods/auth");
const user_1 = require("./methods/user");
const axios_curlirize_1 = __importDefault(require("axios-curlirize"));
const qs_1 = __importDefault(require("qs"));
const event_1 = require("./methods/event");
class TeamCowboy {
    constructor(options) {
        var _a;
        const requestDefaults = {
            baseURL: "https://api.teamcowboy.com/v1",
            headers: {
                "user-agent": (_a = options.userAgent) !== null && _a !== void 0 ? _a : `teamcowboy.js/${version_1.VERSION} ${(0, universal_user_agent_1.getUserAgent)()}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            paramsSerializer: (params) => {
                return qs_1.default.stringify(params, { arrayFormat: "brackets" });
            },
        };
        this.client = {
            privateApiKey: options.privateApiKey,
            publicApiKey: options.publicApiKey,
            auth: options.authToken,
            axiosInstance: axios_1.default.create(requestDefaults),
        };
        if (options.verbose) {
            (0, axios_curlirize_1.default)(this.client.axiosInstance);
        }
        this.Test = Object.assign({}, (0, test_1.testMethods)(this.client));
        this.Auth = Object.assign({}, (0, auth_1.authMethods)(this.client));
        this.User = Object.assign({}, (0, user_1.userMethods)(this.client));
        this.Event = Object.assign({}, (0, event_1.eventMethods)(this.client));
    }
}
exports.TeamCowboy = TeamCowboy;
