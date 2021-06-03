"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildMemberCount = void 0;
const getGuildMemberCount = (member) => {
    const guild = member.guild;
    const memberCount = guild.members.cache.filter(memberData => !memberData.user.bot).size;
    return memberCount;
};
exports.getGuildMemberCount = getGuildMemberCount;
//# sourceMappingURL=get-guild-member-count.js.map