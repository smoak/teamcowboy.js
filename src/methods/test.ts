import type { Client } from "../types";
import methods, { TestMethods } from "./test/index";

export const testMethods = (client: Client): TestMethods => methods(client);
