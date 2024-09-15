import { getUserAgent } from "universal-user-agent";
import type { Client, TeamcowboyOptions } from "./types.js";
import { VERSION } from "./version.js";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { requestLogger, responseLogger } from "axios-logger";
import { testMethods } from "./methods/test.js";
import { AuthMethods, authMethods } from "./methods/auth.js";
import { userMethods } from "./methods/user.js";
import Qs from "qs";
import { EventMethods, eventMethods } from "./methods/event.js";

export class TeamCowboy {
  private readonly client: Client;
  public Test: ReturnType<typeof testMethods>;
  public Auth: AuthMethods;
  public User: ReturnType<typeof userMethods>;
  public Event: EventMethods;

  constructor(options: TeamcowboyOptions) {
    const requestDefaults: AxiosRequestConfig = {
      baseURL: "https://api.teamcowboy.com/v1",
      headers: {
        "user-agent":
          options.userAgent ?? `teamcowboy.js/${VERSION} ${getUserAgent()}`,
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
      this.client.axiosInstance.interceptors.request.use(requestLogger);
      this.client.axiosInstance.interceptors.response.use(responseLogger);
    }

    this.Test = { ...testMethods(this.client) };
    this.Auth = { ...authMethods(this.client) };
    this.User = { ...userMethods(this.client) };
    this.Event = { ...eventMethods(this.client) };
  }
}
