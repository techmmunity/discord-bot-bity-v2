"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageUtil = void 0;
const format_message_1 = require("./format-message");
const get_args_1 = require("./get-args");
const get_flags_1 = require("./get-flags");
const send_and_delete_1 = require("./send-and-delete");
exports.messageUtil = {
    getArgs: get_args_1.getArgs,
    getFlags: get_flags_1.getFlags,
    getFlagsUnformatted: get_flags_1.getFlagsUnformatted,
    sendAndDelete: send_and_delete_1.sendAndDelete,
    formatMessage: format_message_1.formatMessage,
};
//# sourceMappingURL=index.js.map