"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildRolesByRolesIds = void 0;
const getGuildRolesByRolesIds = (member, roles) => roles
    .map(roleId => member.guild.roles.cache.get(roleId))
    .filter(Boolean);
exports.getGuildRolesByRolesIds = getGuildRolesByRolesIds;
//# sourceMappingURL=get-guild-roles-by-roles-ids.js.map