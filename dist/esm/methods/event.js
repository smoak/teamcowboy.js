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
const get = (client, { eventId, teamId, includeRSVPInfo }) => __awaiter(void 0, void 0, void 0, function* () {
    const params = create({
        client,
        httpMethod: "GET",
        params: {
            eventId,
            method: "Event_Get",
            teamId,
            includeRSVPInfo: includeRSVPInfo !== null && includeRSVPInfo !== void 0 ? includeRSVPInfo : null,
        },
    });
    const { data } = yield client.axiosInstance.get("/", { params });
    return data;
});
export const eventMethods = (client) => {
    return {
        get: (options) => get(client, options),
    };
};
