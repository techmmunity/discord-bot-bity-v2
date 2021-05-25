"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountersConfig = void 0;
const channels_1 = require("../../../../../enums/channels");
const guilds_1 = require("../../../../../enums/guilds");
const roles_1 = require("../../../../../enums/roles");
const getCountersConfig = (guildId) => [
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_DEV,
        channelName: "Dev",
        hasAllRoles: [roles_1.RolesEnum[guildId].PROGRAMMING],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_GRAPHIC,
        channelName: "Graphic",
        hasAllRoles: [roles_1.RolesEnum[guildId].GRAPHIC],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_SOUND,
        channelName: "Sound",
        hasAllRoles: [roles_1.RolesEnum[guildId].SOUND],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_ROBOTIC,
        channelName: "Robotic",
        hasAllRoles: [roles_1.RolesEnum[guildId].ROBOTIC],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_MANAGEMENT,
        channelName: "Management",
        hasAllRoles: [roles_1.RolesEnum[guildId].MANAGEMENT],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_UNREGISTRED,
        channelName: "Unregistred",
        doesntHasAnyOfRoles: [roles_1.RolesEnum[guildId].REGISTRED],
    },
    {
        channelId: channels_1.ChannelEnum[guildId].COUNTER_TOTAL,
        channelName: "Total",
        doesntHasAnyOfRoles: [],
    },
];
exports.getCountersConfig = getCountersConfig;
//# sourceMappingURL=get-counters-config.js.map