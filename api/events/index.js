"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
const bump_event_1 = require("./bump/bump.event");
const log_event_1 = require("./log/log.event");
const mention_event_1 = require("./mention/mention.event");
const sync_event_1 = require("./sync/sync.event");
const system_event_1 = require("./system/system.event");
exports.EVENTS = [
    bump_event_1.BumpEvent,
    log_event_1.LogEvent,
    mention_event_1.MentionEvent,
    sync_event_1.SyncEvent,
    system_event_1.SystemEvent,
];
//# sourceMappingURL=index.js.map