import { Client } from "../types";
import methods, { UserMethods } from "./user/index";

export const userMethods = (client: Client): UserMethods => methods(client);
