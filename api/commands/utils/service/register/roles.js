"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForeignRoles = exports.getRoles = void 0;
const guilds_1 = require("../../../../../enums/guilds");
const roles_1 = require("../../../../../enums/roles");
const getRoles = (guildId) => {
    const defaultRoles = [
        roles_1.RolesEnum[guildId].SENIORITY,
        roles_1.RolesEnum[guildId].HEADLINE,
        roles_1.RolesEnum[guildId].INTERESTS,
        roles_1.RolesEnum[guildId].ETC,
        roles_1.RolesEnum[guildId].REGISTERED,
        roles_1.RolesEnum[guildId].STARTER,
    ];
    switch (guildId) {
        case guilds_1.GuildEnum.DEV:
            return [...defaultRoles, roles_1.RolesEnum[guildId].PROGRAMMING];
        case guilds_1.GuildEnum.GRAPHIC:
            return [...defaultRoles, roles_1.RolesEnum[guildId].GRAPHIC];
        case guilds_1.GuildEnum.SOUND:
            return [...defaultRoles, roles_1.RolesEnum[guildId].SOUND];
        case guilds_1.GuildEnum.ROBOTIC:
            return [...defaultRoles, roles_1.RolesEnum[guildId].ROBOTIC];
        case guilds_1.GuildEnum.MANAGEMENT:
            return [...defaultRoles, roles_1.RolesEnum[guildId].MANAGEMENT];
        case guilds_1.GuildEnum.MARKETING:
            return [...defaultRoles, roles_1.RolesEnum[guildId].MARKETING];
        default:
            return [];
    }
};
exports.getRoles = getRoles;
const getForeignRoles = (guildId, flag) => [
    roles_1.RolesEnum[guildId].HEADLINE,
    roles_1.RolesEnum[guildId].INTERESTS,
    roles_1.RolesEnum[guildId].ETC,
    roles_1.RolesEnum[guildId].REGISTERED,
    roles_1.RolesEnum[guildId][flag],
];
exports.getForeignRoles = getForeignRoles;
//# sourceMappingURL=roles.js.map