import { create } from "../request/params";
import { Client, Event } from "../types";

type GetNextTeamEventResponse = {
  readonly success: boolean;
  readonly requestSecs: number;
  readonly body: Event;
}

type GetNextTeamEventOptions = {
  readonly teamId: number | null;
  readonly dashboardTeamsOnly: boolean | null;
};

type GetNextTeamEvent = (
  options?: GetNextTeamEventOptions,
) => Promise<GetNextTeamEventResponse>;

export type UserMethods = {
  readonly getNextTeamEvent: GetNextTeamEvent;
};

type GetNextTeamEventRequestParams = GetNextTeamEventOptions & {
  readonly method: "User_GetNextTeamEvent";
};

const getNextTeamEvent = async (
  client: Client,
  { dashboardTeamsOnly, teamId }: GetNextTeamEventOptions,
) => {
  const params = create<GetNextTeamEventRequestParams>({
    client,
    httpMethod: "GET",
    params: {
      method: "User_GetNextTeamEvent",
      dashboardTeamsOnly: dashboardTeamsOnly ?? null,
      teamId: teamId ?? null,
    },
  });

  const { data } = await client.axiosInstance.get<GetNextTeamEventResponse>(
    "/",
    { params },
  );

  return data;
};

const defaultOptions: GetNextTeamEventOptions = {
  dashboardTeamsOnly: null,
  teamId: null,
};

export const userMethods = (client: Client): UserMethods => {
  return {
    getNextTeamEvent: (options) =>
      getNextTeamEvent(client, options ?? defaultOptions),
  };
};
