import { create as createSignature } from "./signature";
export const create = ({ client, httpMethod, overrides, params, }) => {
    var _a, _b, _c;
    const timestamp = (_a = overrides === null || overrides === void 0 ? void 0 : overrides.timestamp) !== null && _a !== void 0 ? _a : generateTimestamp();
    const nonce = (_b = overrides === null || overrides === void 0 ? void 0 : overrides.nonce) !== null && _b !== void 0 ? _b : generateNonce();
    const paramsWithoutSig = Object.assign({ api_key: client.publicApiKey, nonce,
        timestamp }, params);
    const requestParams = client.auth
        ? Object.assign({ userToken: client.auth }, paramsWithoutSig) : paramsWithoutSig;
    const sig = (_c = overrides === null || overrides === void 0 ? void 0 : overrides.sig) !== null && _c !== void 0 ? _c : createSignature({
        privateApiKey: client.privateApiKey,
        httpMethod,
        params: requestParams,
    });
    return Object.assign({ sig }, requestParams);
};
const generateTimestamp = () => Math.round(new Date().getTime() / 1000).toString();
const generateNonce = () => (new Date().getTime() * 1000000).toString();
