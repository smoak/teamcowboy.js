import type { Client } from "../types";
import { create as createSignature } from "./signature";
import {
  ApiParams,
  AuthenticatedRequestParams,
  ParamsWithoutSig,
  RequestOptions,
  RequestParams,
  RequiredParams,
} from "./types";

type CreateOptions<T extends ApiParams> = RequestOptions & {
  readonly client: Client;
  readonly params: T;
  readonly overrides?: Partial<RequiredParams>;
};

export const create = <T extends ApiParams>({
  client,
  httpMethod,
  overrides,
  params,
}: CreateOptions<T>): RequestParams<T> | AuthenticatedRequestParams<T> => {
  const timestamp = overrides?.timestamp ?? generateTimestamp();
  const nonce = overrides?.nonce ?? generateNonce();

  const paramsWithoutSig: ParamsWithoutSig<T> = {
    api_key: client.publicApiKey,
    nonce,
    timestamp,
    ...params,
  };

  const requestParams = client.auth
    ? { userToken: client.auth, ...paramsWithoutSig }
    : paramsWithoutSig;

  const sig =
    overrides?.sig ??
    createSignature({
      privateApiKey: client.privateApiKey,
      httpMethod,
      params: requestParams,
    });

  return {
    sig,
    ...requestParams,
  };
};

const generateTimestamp = (): string =>
  Math.round(new Date().getTime() / 1000).toString();

const generateNonce = (): string => (new Date().getTime() * 1000000).toString();
