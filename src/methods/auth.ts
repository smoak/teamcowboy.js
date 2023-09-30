import { create } from "../request/params";
import { TCResponse } from "../request/types";
import { Client } from "../types";

type GetUserTokenResponse = TCResponse<{
  readonly userId: string;
  readonly token: string;
}>;

type GetUserTokenOptions = {
  readonly username: string;
  readonly password: string;
};

type GetUserToken = (
  options: GetUserTokenOptions,
) => Promise<GetUserTokenResponse>;

export type AuthMethods = {
  readonly getUserToken: GetUserToken;
};

type GetUserTokenRequestParams = GetUserTokenOptions & {
  readonly method: "Auth_GetUserToken";
};

const getUserToken = async (
  client: Client,
  { username, password }: GetUserTokenOptions,
) => {
  const params = create<GetUserTokenRequestParams>({
    client,
    httpMethod: "POST",
    params: {
      method: "Auth_GetUserToken",
      password,
      username,
    },
  });

  const response = await client.axiosInstance.post<GetUserTokenResponse>(
    "/",
    params,
  );

  return response.data;
};

export const authMethods = (client: Client): AuthMethods => {
  return {
    getUserToken: (options) => getUserToken(client, options),
  };
};
