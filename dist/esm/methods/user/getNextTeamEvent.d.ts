import { TCResponse } from "../../request/types";
import { Client, TCEvent } from "../../types";
export type GetNextTeamEventResponse = TCResponse<TCEvent>;
type GetNextTeamEventOptions = {
    readonly teamId: number | null;
    readonly dashboardTeamsOnly: boolean | null;
};
export type GetNextTeamEvent = (options?: GetNextTeamEventOptions) => Promise<GetNextTeamEventResponse>;
export declare const getNextTeamEvent: (client: Client, options?: GetNextTeamEventOptions) => Promise<GetNextTeamEventResponse>;
export {};
