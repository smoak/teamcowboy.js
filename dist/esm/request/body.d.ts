import { ApiParams, ParamsWithoutSig } from "./types";
export declare const create: <T extends ApiParams>(params: ParamsWithoutSig<T>) => string;
