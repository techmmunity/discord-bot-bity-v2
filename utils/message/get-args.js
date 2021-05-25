"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgs = void 0;
const get_flags_1 = require("./get-flags");
const remove_prefix_1 = require("./helpers/remove-prefix");
const getArgs = (message) => {
    const flags = get_flags_1.getFlagsUnformatted(message);
    const messageContent = remove_prefix_1.removePrefix(message.content);
    const messageWithoutflags = flags.reduce((message, flag) => {
        return message.replace(flag, "");
    }, messageContent);
    return messageWithoutflags.split(" ");
};
exports.getArgs = getArgs;
//# sourceMappingURL=get-args.js.map