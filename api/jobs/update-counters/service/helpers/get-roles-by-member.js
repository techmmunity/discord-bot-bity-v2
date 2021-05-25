"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRolesByMember = void 0;
const removeBots = (members) => members.filter(member => !member.user.bot);
const getRolesByMember = async (guild) => {
    const members = await guild.members.fetch();
    const guildMembers = removeBots(members);
    const rolesIdsByMember = guildMembers.map(member => member.roles.cache.map(role => role.id));
    return rolesIdsByMember;
};
exports.getRolesByMember = getRolesByMember;
//# sourceMappingURL=get-roles-by-member.js.map