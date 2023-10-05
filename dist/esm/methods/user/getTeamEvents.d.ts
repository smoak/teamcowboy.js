import { TCResponse } from "../../request/types";
import { Client, TCEvent } from "../../types";
export type GetTeamEventsResponse = TCResponse<TCEvent[]>;
export type GetTeamEvents = (options?: GetTeamEventsOptions) => Promise<GetTeamEventsResponse>;
type GetTeamEventsOptions = {
    readonly startDateTime: Date | null;
    readonly endDateTime: Date | null;
    readonly teamId: number | null;
    readonly dashboardTeamsOnly: boolean | null;
};
export declare const getTeamEvents: (client: Client, options?: GetTeamEventsOptions) => Promise<GetTeamEventsResponse>;
export {};
