import { create } from "../../request/params.js";
import { TCResponse } from "../../request/types.js";
import { Client, User } from "../../types.js";

type GetUserRequestParams = {
  readonly method: "User_Get";
};

export type GetResponse = TCResponse<User>;
export type Get = () => Promise<GetResponse>;
export const getUser = async (client: Client): Promise<GetResponse> => {
  const params = create<GetUserRequestParams>({
    client,
    httpMethod: "GET",
    params: {
      method: "User_Get",
    },
  });

  const { data } = await client.axiosInstance.get<GetResponse>("/", { params });

  return data;
};
