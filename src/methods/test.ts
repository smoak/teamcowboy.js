import type { Client } from "../types.js";
import methods, { TestMethods } from "./test/index.js";

export const testMethods = (client: Client): TestMethods => methods(client);
