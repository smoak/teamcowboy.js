import { getUser } from "./get";
import { getNextTeamEvent } from "./getNextTeamEvent";
import { getTeamEvents } from "./getTeamEvents";
import { getTeamMessages } from "./getTeamMessages";
import { getTeams } from "./getTeams";
const methods = (client) => {
    return {
        get: () => getUser(client),
        getTeams: (options) => getTeams(client, options),
        getTeamEvents: (options) => getTeamEvents(client, options),
        getNextTeamEvent: (options) => getNextTeamEvent(client, options),
        getTeamMessages: (options) => getTeamMessages(client, options),
    };
};
export default methods;
