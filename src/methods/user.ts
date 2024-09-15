import { Client } from "../types.js";
import methods, { UserMethods } from "./user/index.js";

export const userMethods = (client: Client): UserMethods => methods(client);
