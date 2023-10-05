var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { create } from "../request/params";
const getUserToken = (client, { username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const params = create({
        client,
        httpMethod: "POST",
        params: {
            method: "Auth_GetUserToken",
            password,
            username,
        },
    });
    const response = yield client.axiosInstance.post("/", params);
    return response.data;
});
export const authMethods = (client) => {
    return {
        getUserToken: (options) => getUserToken(client, options),
    };
};
