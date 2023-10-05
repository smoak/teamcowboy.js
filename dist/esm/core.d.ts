import type { TeamcowboyOptions } from "./types";
import { type TestMethods } from "./methods/test";
import { AuthMethods } from "./methods/auth";
import { userMethods } from "./methods/user";
import { EventMethods } from "./methods/event";
export declare class TeamCowboy {
    private readonly client;
    Test: TestMethods;
    Auth: AuthMethods;
    User: ReturnType<typeof userMethods>;
    Event: EventMethods;
    constructor(options: TeamcowboyOptions);
}
