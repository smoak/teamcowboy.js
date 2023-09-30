import { create } from "../request/params";
import { TCResponse } from "../request/types";
import { Client, TCEvent } from "../types";

type GetResponse = TCResponse<TCEvent>;

type GetOptions = {
  readonly teamId: number;
  readonly eventId: number;
  readonly includeRSVPInfo?: boolean | null;
};
type Get = (options: GetOptions) => Promise<GetResponse>;

export type EventMethods = {
  readonly get: Get;
};

type GetEventRequestParams = GetOptions & {
  readonly method: "Event_Get";
};

const get = async (
  client: Client,
  { eventId, teamId, includeRSVPInfo }: GetOptions,
) => {
  const params = create<GetEventRequestParams>({
    client,
    httpMethod: "GET",
    params: {
      eventId,
      method: "Event_Get",
      teamId,
      includeRSVPInfo: includeRSVPInfo ?? null,
    },
  });

  const { data } = await client.axiosInstance.get<GetResponse>("/", { params });

  return data;
};

export const eventMethods = (client: Client): EventMethods => {
  return {
    get: (options) => get(client, options),
  };
};
