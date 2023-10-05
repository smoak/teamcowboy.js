import { ApiParams, ParamsWithoutSig, RequestOptions } from "./types";
type CreateOptions<T extends ApiParams> = RequestOptions & {
    readonly privateApiKey: string;
    readonly params: ParamsWithoutSig<T>;
};
export declare const create: <T extends ApiParams>({ privateApiKey, httpMethod, params, }: CreateOptions<T>) => string;
export {};
