"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePrefix = void 0;
const config_1 = require("../../../config");
const removePrefix = (content) => {
    const prefix = config_1.Config.prefix;
    const messageWithoutPrefix = content.replace(prefix, "");
    const messageWithputCommand = messageWithoutPrefix
        .split(" ")
        .slice(1)
        .join(" ");
    return messageWithputCommand;
};
exports.removePrefix = removePrefix;
//# sourceMappingURL=remove-prefix.js.map