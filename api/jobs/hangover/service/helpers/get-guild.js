"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuild = void 0;
const getGuild = (DiscordClient, guildId) => {
    return DiscordClient.getClient().guilds.cache.get(guildId);
};
exports.getGuild = getGuild;
//# sourceMappingURL=get-guild.js.map