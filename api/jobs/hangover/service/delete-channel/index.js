"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChannel = void 0;
const get_guild_1 = require("../helpers/get-guild");
const deleteChannel = ({ discordClient, guildId, categoryName, channelName, }) => async () => {
    const guild = get_guild_1.getGuild(discordClient, guildId);
    const textChannel = guild.channels.cache.find(channel => channel.name === channelName && channel.type === "text");
    const voiceChannel = guild.channels.cache.find(channel => channel.name === channelName && channel.type === "voice");
    const category = guild.channels.cache.find(channel => channel.name === categoryName);
    await Promise.all([
        textChannel === null || textChannel === void 0 ? void 0 : textChannel.delete(),
        voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.delete(),
        category === null || category === void 0 ? void 0 : category.delete(),
    ]);
};
exports.deleteChannel = deleteChannel;
//# sourceMappingURL=index.js.map