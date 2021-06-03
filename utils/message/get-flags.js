"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlags = exports.getFlagsUnformatted = void 0;
const remove_prefix_1 = require("./helpers/remove-prefix");
const config_1 = require("../../config");
const FLAGS_REGEX = /--[^\s]+(?:='[^']+'|=[^\s]+)|--[^\s]+/g;
const isFlagWithValue = (value) => value.includes("=");
const isFlagWithContinuosValue = (value) => value.includes(config_1.CONFIG.flagDelimiter);
const getFlagAndValue = (flag) => ({
    flag: flag.split("=").shift(),
    value: flag.split("=").pop(),
});
const getFlagAndContinuosValue = (flag) => {
    const flagKey = flag.split("=").shift();
    const unformattedValue = flag.split("=").pop();
    const formattedValue = unformattedValue.replace(new RegExp(config_1.CONFIG.flagDelimiter, "g"), "");
    return {
        flag: flagKey,
        continuosValue: formattedValue,
    };
};
const getFlagKeyFormatted = (flagKey) => flagKey.slice(config_1.CONFIG.flagPrefix.length);
const formatFlags = (flags) => flags.reduce((acc, cur) => {
    if (isFlagWithValue(cur)) {
        const { flag, continuosValue } = getFlagAndContinuosValue(cur);
        acc[flag] = continuosValue;
        return acc;
    }
    if (isFlagWithContinuosValue(cur)) {
        const { flag: flagC, value } = getFlagAndValue(cur);
        acc[flagC] = value;
        return acc;
    }
    const formatFlagKey = getFlagKeyFormatted(cur);
    acc[formatFlagKey] = true;
    return acc;
}, {});
const getFlagsUnformatted = (message) => {
    const messageContent = remove_prefix_1.removePrefix(message.content);
    return messageContent.match(FLAGS_REGEX) || [];
};
exports.getFlagsUnformatted = getFlagsUnformatted;
const getFlags = (message) => {
    const flags = exports.getFlagsUnformatted(message);
    return formatFlags(flags);
};
exports.getFlags = getFlags;
//# sourceMappingURL=get-flags.js.map