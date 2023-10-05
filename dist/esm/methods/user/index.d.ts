import { Client } from "../../types";
import { Get } from "./get";
import { GetNextTeamEvent } from "./getNextTeamEvent";
import { GetTeamEvents } from "./getTeamEvents";
import { GetTeamMessages } from "./getTeamMessages";
import { GetTeams } from "./getTeams";
export type UserMethods = {
    readonly get: Get;
    readonly getTeams: GetTeams;
    readonly getTeamEvents: GetTeamEvents;
    readonly getNextTeamEvent: GetNextTeamEvent;
    readonly getTeamMessages: GetTeamMessages;
};
declare const methods: (client: Client) => UserMethods;
export default methods;
