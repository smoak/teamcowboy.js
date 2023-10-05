import { getUserAgent } from "universal-user-agent";
import { VERSION } from "./version";
import axios from "axios";
import { testMethods } from "./methods/test";
import { authMethods } from "./methods/auth";
import { userMethods } from "./methods/user";
import AxiosCurlirize from "axios-curlirize";
import Qs from "qs";
import { eventMethods } from "./methods/event";
export class TeamCowboy {
    constructor(options) {
        var _a;
        const requestDefaults = {
            baseURL: "https://api.teamcowboy.com/v1",
            headers: {
                "user-agent": (_a = options.userAgent) !== null && _a !== void 0 ? _a : `teamcowboy.js/${VERSION} ${getUserAgent()}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            paramsSerializer: (params) => {
                return Qs.stringify(params, { arrayFormat: "brackets" });
            },
        };
        this.client = {
            privateApiKey: options.privateApiKey,
            publicApiKey: options.publicApiKey,
            auth: options.authToken,
            axiosInstance: axios.create(requestDefaults),
        };
        if (options.verbose) {
            AxiosCurlirize(this.client.axiosInstance);
        }
        this.Test = Object.assign({}, testMethods(this.client));
        this.Auth = Object.assign({}, authMethods(this.client));
        this.User = Object.assign({}, userMethods(this.client));
        this.Event = Object.assign({}, eventMethods(this.client));
    }
}
