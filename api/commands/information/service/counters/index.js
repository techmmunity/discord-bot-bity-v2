"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counters = void 0;
const markdown_1 = require("../../../../../utils/markdown");
const channels_patterns_1 = require("../../../../../config/channels-patterns");
const getVoiceChannels = (message) => {
    var _a, _b;
    return (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.array()) === null || _b === void 0 ? void 0 : _b.filter(channel => channel.type === "voice");
};
const getCountersChannels = (channels) => channels === null || channels === void 0 ? void 0 : channels.filter(voiceChannel => voiceChannel.name.match(channels_patterns_1.CHANNELS_PATTERNS.counters.name));
const formatCounters = (channels) => channels
    .map(counter => {
    const name = counter.name.split(" ").shift();
    return `${name.padEnd(15, " ")}${counter.id}`;
})
    .join("\n");
const counters = async (message) => {
    const voiceChannels = getVoiceChannels(message);
    const counterChannels = getCountersChannels(voiceChannels);
    const countersFormatted = formatCounters(counterChannels);
    await message.channel.send(markdown_1.markdownUtil.codeBlock(countersFormatted));
};
exports.counters = counters;
//# sourceMappingURL=index.js.map