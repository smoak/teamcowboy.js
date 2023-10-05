import sha1 from "crypto-js/sha1";
import { create as createRequestBody } from "./body";
const sha1hash = (input) => {
    return sha1(input).toString();
};
export const create = ({ privateApiKey, httpMethod, params, }) => {
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
