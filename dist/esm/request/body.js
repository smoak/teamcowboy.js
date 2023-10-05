const sortedURLSearchParams = (params) => {
    const sorted = new URLSearchParams(params);
    sorted.sort();
    return sorted;
};
const withLowerCasedValues = (params) => {
    const lowerCase = new URLSearchParams();
    params.forEach((value, key) => {
        lowerCase.set(key.toLowerCase(), value.toLowerCase());
    });
    return lowerCase;
};
const withEmptyParams = (params) => Object.entries(params).reduce((accum, [key, value]) => {
    accum.set(key, value != null ? value : "");
    return accum;
}, new URLSearchParams());
export const create = (params) => {
    const requestParams = withLowerCasedValues(withEmptyParams(params));
    return sortedURLSearchParams(requestParams).toString().replace(/\+/g, "%20");
};
