import { Client } from "../../types";
import { Get, getUser } from "./get";
import { GetNextTeamEvent, getNextTeamEvent } from "./getNextTeamEvent";
import { GetTeamEvents, getTeamEvents } from "./getTeamEvents";
import { GetTeamMessages, getTeamMessages } from "./getTeamMessages";
import { GetTeams, getTeams } from "./getTeams";

export type UserMethods = {
  readonly get: Get;
  readonly getTeams: GetTeams;
  readonly getTeamEvents: GetTeamEvents;
  readonly getNextTeamEvent: GetNextTeamEvent;
  readonly getTeamMessages: GetTeamMessages;
};

const methods = (client: Client): UserMethods => {
  return {
    get: () => getUser(client),
    getTeams: (options) => getTeams(client, options),
    getTeamEvents: (options) => getTeamEvents(client, options),
    getNextTeamEvent: (options) => getNextTeamEvent(client, options),
    getTeamMessages: (options) => getTeamMessages(client, options),
  };
};

export default methods;
