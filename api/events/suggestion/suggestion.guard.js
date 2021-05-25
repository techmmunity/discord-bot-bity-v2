"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionGuard = void 0;
const channels_1 = require("../../../enums/channels");
const guilds_1 = require("../../../enums/guilds");
class SuggestionGuard {
    async canActive(_, [context]) {
        var _a;
        const isBot = context.author.bot;
        if (isBot)
            return false;
        const guildId = (_a = context.guild) === null || _a === void 0 ? void 0 : _a.id;
        const channelId = context.channel.id;
        const suggestionsChannelId = channels_1.ChannelEnum[guildId].SUGGESTIONS;
        return channelId === suggestionsChannelId;
    }
}
exports.SuggestionGuard = SuggestionGuard;
//# sourceMappingURL=suggestion.guard.js.map