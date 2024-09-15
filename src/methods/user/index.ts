import { Client } from "../../types.js";
import { Get, getUser } from "./get.js";
import { GetNextTeamEvent, getNextTeamEvent } from "./getNextTeamEvent.js";
import { GetTeamEvents, getTeamEvents } from "./getTeamEvents.js";
import { GetTeamMessages, getTeamMessages } from "./getTeamMessages.js";
import { GetTeams, getTeams } from "./getTeams.js";

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
