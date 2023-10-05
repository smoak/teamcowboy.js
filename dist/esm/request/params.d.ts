import type { Client } from "../types";
import { ApiParams, AuthenticatedRequestParams, RequestOptions, RequestParams, RequiredParams } from "./types";
type CreateOptions<T extends ApiParams> = RequestOptions & {
    readonly client: Client;
    readonly params: T;
    readonly overrides?: Partial<RequiredParams>;
};
export declare const create: <T extends ApiParams>({ client, httpMethod, overrides, params, }: CreateOptions<T>) => RequestParams<T> | AuthenticatedRequestParams<T>;
export {};
