import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client, Team } from "../../types.js";

export type GetTeamsResponse = TCResponse<Team[]>;

export type GetTeams = (options?: GetTeamsOptions) => Promise<GetTeamsResponse>;

type GetTeamsOptions = {
  readonly dashboardTeamsOnly: boolean | null;
};

type GetTeamsRequestParams = GetTeamsOptions & {
  readonly method: "User_GetTeams";
};

const defaultOptions: GetTeamsOptions = {
  dashboardTeamsOnly: null,
};

export const getTeams = async (
  client: Client,
  options?: GetTeamsOptions,
): Promise<GetTeamsResponse> => {
  const methodParams: GetTeamsRequestParams = {
    method: "User_GetTeams",
    ...(options ?? defaultOptions),
  };
  const params = create<GetTeamsRequestParams>({
    client,
    httpMethod: "GET",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.get<GetTeamsResponse>("/", {
    params,
  });

  return data;
};
