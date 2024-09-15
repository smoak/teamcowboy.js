import sha1 from "crypto-js/sha1.js";
import { ApiParams, ParamsWithoutSig, RequestOptions } from "./types.js";
import { create as createRequestBody } from "./body.js";

const sha1hash = (input: string): string => {
  return sha1(input).toString();
};

type CreateOptions<T extends ApiParams> = RequestOptions & {
  readonly privateApiKey: string;
  readonly params: ParamsWithoutSig<T>;
};

export const create = <T extends ApiParams>({
  privateApiKey,
  httpMethod,
  params,
}: CreateOptions<T>): string => {
  const requestBody = createRequestBody(params);

  const requestStr = [
    privateApiKey,
    httpMethod.toUpperCase(),
    params.method,
    params.timestamp,
    params.nonce,
    requestBody,
  ].join("|");

  return sha1hash(requestStr);
};
