"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelToLog = void 0;
const channels_1 = require("../../../../../enums/channels");
const guilds_1 = require("../../../../../enums/guilds");
const getChannelId = (guildId, type) => {
    switch (type) {
        case "invite":
            return channels_1.ChannelEnum[guildId].LOG_INVITE;
        case "member":
            return channels_1.ChannelEnum[guildId].LOG_MEMBER;
        case "message":
            return channels_1.ChannelEnum[guildId].LOG_MESSAGE;
    }
};
const getChannelToLog = ({ DiscordClient, guildId, type, }) => {
    const guild = DiscordClient.getClient().guilds.cache.get(guilds_1.SpecialGuildEnum.LOGS);
    const channelId = getChannelId(guildId, type);
    const channel = guild.channels.cache.get(channelId);
    return channel;
};
exports.getChannelToLog = getChannelToLog;
//# sourceMappingURL=get-channel-to-log.js.map