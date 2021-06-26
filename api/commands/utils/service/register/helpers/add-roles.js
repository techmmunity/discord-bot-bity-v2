"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoles = void 0;
const roles_1 = require("../roles");
const message_1 = require("../../../../../../utils/message");
const guilds_1 = require("../../../../../../enums/guilds");
const getMemberRoles = ({ guildId, flags }) => {
    const { dev, graphic, sound, robotic, management, marketing } = flags;
    switch (true) {
        case dev && guildId !== guilds_1.GuildEnum.DEV:
            return roles_1.getForeignRoles(guildId, "PROGRAMMING");
        case graphic && guildId !== guilds_1.GuildEnum.GRAPHIC:
            return roles_1.getForeignRoles(guildId, "GRAPHIC");
        case sound && guildId !== guilds_1.GuildEnum.SOUND:
            return roles_1.getForeignRoles(guildId, "SOUND");
        case robotic && guildId !== guilds_1.GuildEnum.ROBOTIC:
            return roles_1.getForeignRoles(guildId, "ROBOTIC");
        case management && guildId !== guilds_1.GuildEnum.MANAGEMENT:
            return roles_1.getForeignRoles(guildId, "MANAGEMENT");
        case marketing && guildId !== guilds_1.GuildEnum.MARKETING:
            return roles_1.getForeignRoles(guildId, "MARKETING");
        default:
            return roles_1.getRoles(guildId);
    }
};
const addRoles = ({ guildId, flags, member }) => {
    const roles = getMemberRoles({ guildId, flags });
    const rolesToAdd = roles.map(roleId => member.guild.roles.cache.get(roleId));
    return member.roles.add(rolesToAdd);
};
exports.addRoles = addRoles;
//# sourceMappingURL=add-roles.js.map