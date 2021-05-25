"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildInvitesUrls = void 0;
const getGuildInvitesUrls = async (member) => {
    const invites = await member.guild.fetchInvites();
    return invites.map(invite => invite.url);
};
exports.getGuildInvitesUrls = getGuildInvitesUrls;
//# sourceMappingURL=get-guild-invites.js.map