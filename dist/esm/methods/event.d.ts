import { TCResponse } from "../request/types";
import { Client, TCEvent } from "../types";
type GetResponse = TCResponse<TCEvent>;
type GetOptions = {
    readonly teamId: number;
    readonly eventId: number;
    readonly includeRSVPInfo?: boolean | null;
};
type Get = (options: GetOptions) => Promise<GetResponse>;
export type EventMethods = {
    readonly get: Get;
};
export declare const eventMethods: (client: Client) => EventMethods;
export {};
