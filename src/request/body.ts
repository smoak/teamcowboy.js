import { ApiParams, ParamsWithoutSig } from "./types.js";

const sortedURLSearchParams = (params: URLSearchParams): URLSearchParams => {
  const sorted = new URLSearchParams(params);
  sorted.sort();
  return sorted;
};

const withLowerCasedValues = (params: URLSearchParams): URLSearchParams => {
  const lowerCase = new URLSearchParams();

  params.forEach((value, key) => {
    lowerCase.set(key.toLowerCase(), value.toLowerCase());
  });

  return lowerCase;
};

const withEmptyParams = <T extends ApiParams>(params: T): URLSearchParams =>
  Object.entries(params).reduce((accum, [key, value]) => {
    accum.set(key, value != null ? value : "");

    return accum;
  }, new URLSearchParams());

export const create = <T extends ApiParams>(
  params: ParamsWithoutSig<T>,
): string => {
  const requestParams = withLowerCasedValues(withEmptyParams(params));

  return sortedURLSearchParams(requestParams).toString().replace(/\+/g, "%20");
};
