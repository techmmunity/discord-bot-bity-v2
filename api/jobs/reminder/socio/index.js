"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSocioReminder = void 0;
const message_1 = require("./message");
const channels_1 = require("../../../../enums/channels");
const guilds_1 = require("../../../../enums/guilds");
const sendSocioReminder = async (discordClient, guildId) => {
    const guild = discordClient.getClient().guilds.cache.get(guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].NETWORKING);
    await channel.send(message_1.MESSAGE);
};
exports.sendSocioReminder = sendSocioReminder;
//# sourceMappingURL=index.js.map