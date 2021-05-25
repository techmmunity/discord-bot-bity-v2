"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const commands_1 = require("./commands");
const events_1 = require("./events");
const jobs_1 = require("./jobs");
exports.Api = [...commands_1.Commands, ...events_1.Events, ...jobs_1.Jobs];
//# sourceMappingURL=index.js.map