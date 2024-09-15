import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client } from "../../types.js";

type PostRequestParams = {
  readonly method: "Test_PostRequest";
  readonly testParam: string | null;
};

type PostResponse = TCResponse<{ readonly helloWorld: string }>;
export type Post = (testParam?: string) => Promise<PostResponse>;
export const postRequest = async (
  client: Client,
  testParam?: string,
): Promise<PostResponse> => {
  const methodParams: PostRequestParams = {
    method: "Test_PostRequest",
    testParam: testParam ?? null,
  };
  const params = create<PostRequestParams>({
    client,
    httpMethod: "POST",
    params: methodParams,
  });

  const { data } = await client.axiosInstance.post<PostResponse>("/", params);

  return data;
};
