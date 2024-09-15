import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client, Message } from "../../types.js";

export type GetTeamMessagesResponse = TCResponse<Message[]>;

export type GetTeamMessages = (
  options?: GetTeamMessagesOptions,
) => Promise<GetTeamMessagesResponse>;

type GetTeamMessagesOptions = {
  readonly teamId: number | null;
  readonly messageId: number | null;
  readonly offset: number;
  readonly qty: number;
  readonly sortBy: "title" | "lastUpdated" | "type";
  readonly sortDirection: "ASC" | "DESC";
};

type GetTeamMessagesRequestParams = GetTeamMessagesOptions & {
  readonly method: "User_GetTeamMessages";
};

const defaultOptions: GetTeamMessagesOptions = {
  messageId: null,
  offset: 0,
  qty: 10,
  sortBy: "lastUpdated",
  sortDirection: "ASC",
  teamId: null,
};

export const getTeamMessages = async (
  client: Client,
  options?: GetTeamMessagesOptions,
): Promise<GetTeamMessagesResponse> => {
  const methodParams: GetTeamMessagesRequestParams = {
    method: "User_GetTeamMessages",
    ...(options ?? defaultOptions),
  };
  const params = create<GetTeamMessagesRequestParams>({
    client,
    httpMethod: "GET",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.get<GetTeamMessagesResponse>(
    "/",
    {
      params,
    },
  );

  return data;
};
