import { TCResponse } from "../../request/types";
import { Client, Team } from "../../types";
export type GetTeamsResponse = TCResponse<Team[]>;
export type GetTeams = (options?: GetTeamsOptions) => Promise<GetTeamsResponse>;
type GetTeamsOptions = {
    readonly dashboardTeamsOnly: boolean | null;
};
export declare const getTeams: (client: Client, options?: GetTeamsOptions) => Promise<GetTeamsResponse>;
export {};
