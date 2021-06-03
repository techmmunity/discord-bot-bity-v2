"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuild = void 0;
const getGuild = (discordClient, guildId) => {
    return discordClient.getClient().guilds.cache.get(guildId);
};
exports.getGuild = getGuild;
//# sourceMappingURL=get-guild.js.map