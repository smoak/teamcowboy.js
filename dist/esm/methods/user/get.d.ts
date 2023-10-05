import { TCResponse } from "../../request/types";
import { Client, User } from "../../types";
export type GetResponse = TCResponse<User>;
export type Get = () => Promise<GetResponse>;
export declare const getUser: (client: Client) => Promise<GetResponse>;
