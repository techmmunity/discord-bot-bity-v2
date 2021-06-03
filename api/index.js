"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const commands_1 = require("./commands");
const events_1 = require("./events");
const jobs_1 = require("./jobs");
exports.API = [...commands_1.COMMANDS, ...events_1.EVENTS, ...jobs_1.JOBS];
//# sourceMappingURL=index.js.map