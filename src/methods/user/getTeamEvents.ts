import { create } from "../../request/params";
import { TCResponse } from "../../request/types";
import { Client, TCEvent } from "../../types";

export type GetTeamEventsResponse = TCResponse<TCEvent[]>;

export type GetTeamEvents = (
  options?: GetTeamEventsOptions,
) => Promise<GetTeamEventsResponse>;

type GetTeamEventsOptions = {
  readonly startDateTime: Date | null;
  readonly endDateTime: Date | null;
  readonly teamId: number | null;
  readonly dashboardTeamsOnly: boolean | null;
};

type GetTeamEventsRequestParams = GetTeamEventsOptions & {
  readonly method: "User_GetTeamEvents";
};

const defaultOptions: GetTeamEventsOptions = {
  dashboardTeamsOnly: null,
  endDateTime: null,
  startDateTime: null,
  teamId: null,
};

export const getTeamEvents = async (
  client: Client,
  options?: GetTeamEventsOptions,
): Promise<GetTeamEventsResponse> => {
  const methodParams: GetTeamEventsRequestParams = {
    method: "User_GetTeamEvents",
    ...(options ?? defaultOptions),
  };
  const params = create<GetTeamEventsRequestParams>({
    client,
    httpMethod: "GET",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.get<GetTeamEventsResponse>("/", {
    params,
  });

  return data;
};
