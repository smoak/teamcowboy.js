import { TCResponse } from "../request/types";
import { Client } from "../types";
type GetUserTokenResponse = TCResponse<{
    readonly userId: string;
    readonly token: string;
}>;
type GetUserTokenOptions = {
    readonly username: string;
    readonly password: string;
};
type GetUserToken = (options: GetUserTokenOptions) => Promise<GetUserTokenResponse>;
export type AuthMethods = {
    readonly getUserToken: GetUserToken;
};
export declare const authMethods: (client: Client) => AuthMethods;
export {};
