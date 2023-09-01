import { create } from "../request/params";
import type { Client } from "../types";

type GetRequestResponse = {
  readonly helloWorld: string;
};

type GetRequest = (testParam?: string) => Promise<GetRequestResponse>;
type PostRequest = GetRequest;

export type TestMethods = {
  readonly getRequest: GetRequest;
  readonly postRequest: PostRequest;
};

type TestGetRequestParams = {
  readonly testParam?: string;
  readonly method: "Test_GetRequest";
};

type TestPostRequestParams = {
  readonly testParam?: string;
  readonly method: "Test_PostRequest";
};

const getRequest = async (client: Client, testParam?: string) => {
  const params = create<TestGetRequestParams>({
    client,
    httpMethod: "GET",
    params: {
      method: "Test_GetRequest",
      testParam,
    },
  });

  const response = await client.axiosInstance.get<GetRequestResponse>("/", {
    params,
  });

  return response.data;
};

const postRequest = async (client: Client, testParam?: string) => {
  const params = create<TestPostRequestParams>({
    client,
    httpMethod: "POST",
    params: {
      method: "Test_PostRequest",
      testParam,
    },
  });

  const response = await client.axiosInstance.post<GetRequestResponse>(
    "/",
    params,
  );

  return response.data;
};

export const testMethods = (client: Client): TestMethods => {
  return {
    getRequest: (testParam) => getRequest(client, testParam),
    postRequest: (testParam) => postRequest(client, testParam),
  };
};
