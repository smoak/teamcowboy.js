import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client, TCEvent } from "../../types.js";

export type GetNextTeamEventResponse = TCResponse<TCEvent>;
type GetNextTeamEventOptions = {
  readonly teamId: number | null;
  readonly dashboardTeamsOnly: boolean | null;
};

export type GetNextTeamEvent = (
  options?: GetNextTeamEventOptions,
) => Promise<GetNextTeamEventResponse>;

type GetNextTeamEventRequestParams = GetNextTeamEventOptions & {
  readonly method: "User_GetNextTeamEvent";
};

const defaultOptions: GetNextTeamEventOptions = {
  dashboardTeamsOnly: null,
  teamId: null,
};

export const getNextTeamEvent = async (
  client: Client,
  options?: GetNextTeamEventOptions,
) => {
  const methodParams: GetNextTeamEventRequestParams = {
    method: "User_GetNextTeamEvent",
    ...(options ?? defaultOptions),
  };

  const params = create<GetNextTeamEventRequestParams>({
    client,
    httpMethod: "GET",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.get<GetNextTeamEventResponse>(
    "/",
    { params },
  );

  return data;
};
