import { getUserAgent } from "universal-user-agent";
import type { Client, TeamcowboyOptions } from "./types";
import { VERSION } from "./version";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { testMethods, type TestMethods } from "./methods/test";
import { AuthMethods, authMethods } from "./methods/auth";
import { UserMethods, userMethods } from "./methods/user";
import AxiosCurlirize from "axios-curlirize";
import Qs from "qs";
import { EventMethods, eventMethods } from "./methods/event";

export class TeamCowboy {
  private readonly client: Client;
  public Test: TestMethods;
  public Auth: AuthMethods;
  public User: UserMethods;
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
      AxiosCurlirize(this.client.axiosInstance);
    }

    this.Test = { ...testMethods(this.client) };
    this.Auth = { ...authMethods(this.client) };
    this.User = { ...userMethods(this.client) };
    this.Event = { ...eventMethods(this.client) };
  }
}
