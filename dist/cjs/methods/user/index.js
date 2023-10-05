"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
const getNextTeamEvent_1 = require("./getNextTeamEvent");
const getTeamEvents_1 = require("./getTeamEvents");
const getTeamMessages_1 = require("./getTeamMessages");
const getTeams_1 = require("./getTeams");
const methods = (client) => {
    return {
        get: () => (0, get_1.getUser)(client),
        getTeams: (options) => (0, getTeams_1.getTeams)(client, options),
        getTeamEvents: (options) => (0, getTeamEvents_1.getTeamEvents)(client, options),
        getNextTeamEvent: (options) => (0, getNextTeamEvent_1.getNextTeamEvent)(client, options),
        getTeamMessages: (options) => (0, getTeamMessages_1.getTeamMessages)(client, options),
    };
};
exports.default = methods;
