import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client } from "../../types.js";

type GetRequestParams = {
  readonly method: "Test_GetRequest";
  readonly testParam: string | null;
};

export type GetResponse = TCResponse<{ readonly helloWorld: string }>;
export type Get = (testParam?: string) => Promise<GetResponse>;
export const getRequest = async (
  client: Client,
  testParam?: string,
): Promise<GetResponse> => {
  const methodParams: GetRequestParams = {
    method: "Test_GetRequest",
    testParam: testParam ?? null,
  };
  const params = create<GetRequestParams>({
    client,
    httpMethod: "GET",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.get<GetResponse>("/", { params });

  return data;
};
