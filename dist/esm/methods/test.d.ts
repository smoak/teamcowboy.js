import { TCResponse } from "../request/types";
import type { Client } from "../types";
type GetRequestResponse = TCResponse<{
    readonly helloWorld: string;
}>;
type GetRequest = (testParam?: string) => Promise<GetRequestResponse>;
type PostRequest = GetRequest;
export type TestMethods = {
    readonly getRequest: GetRequest;
    readonly postRequest: PostRequest;
};
export declare const testMethods: (client: Client) => TestMethods;
export {};
