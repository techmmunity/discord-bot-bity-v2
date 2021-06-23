"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ban = void 0;
const active_guilds_1 = require("../../../../../config/active-guilds");
const ban = async ({ guildId, userId, client }) => {
    const guildsIds = active_guilds_1.getActiveGuilds()
        .filter(id => id !== guildId)
        .filter(Boolean);
    const guilds = await Promise.all(guildsIds.map(id => client.guilds.fetch(id)));
    const guildMembers = await Promise.all(guilds.map(guild => guild.members.fetch(userId))).then(members => members.filter(Boolean));
    await Promise.all(guildMembers.map(guildMember => guildMember.ban()));
};
exports.ban = ban;
//# sourceMappingURL=index.js.map