"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildRolesByRolesNames = void 0;
const getGuildRolesByRolesNames = (member, roles) => roles
    .map(roleName => member.guild.roles.cache.find(role => role.name === roleName))
    .filter(Boolean);
exports.getGuildRolesByRolesNames = getGuildRolesByRolesNames;
//# sourceMappingURL=get-guild-roles-by-roles-names.js.map