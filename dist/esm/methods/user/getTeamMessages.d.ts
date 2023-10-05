import { TCResponse } from "../../request/types";
import { Client, Message } from "../../types";
export type GetTeamMessagesResponse = TCResponse<Message[]>;
export type GetTeamMessages = (options?: GetTeamMessagesOptions) => Promise<GetTeamMessagesResponse>;
type GetTeamMessagesOptions = {
    readonly teamId: number | null;
    readonly messageId: number | null;
    readonly offset: number;
    readonly qty: number;
    readonly sortBy: "title" | "lastUpdated" | "type";
    readonly sortDirection: "ASC" | "DESC";
};
export declare const getTeamMessages: (client: Client, options?: GetTeamMessagesOptions) => Promise<GetTeamMessagesResponse>;
export {};
