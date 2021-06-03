"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
const bump_event_1 = require("./bump/bump.event");
const log_event_1 = require("./log/log.event");
const mention_event_1 = require("./mention/mention.event");
const suggestion_event_1 = require("./suggestion/suggestion.event");
const system_event_1 = require("./system/system.event");
exports.EVENTS = [
    bump_event_1.BumpEvent,
    log_event_1.LogEvent,
    mention_event_1.MentionEvent,
    suggestion_event_1.SuggestionEvent,
    system_event_1.SystemEvent,
];
//# sourceMappingURL=index.js.map