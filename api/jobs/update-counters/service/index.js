"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCounters = void 0;
const get_promises_to_update_counters_1 = require("./helpers/get-promises-to-update-counters");
const get_roles_by_member_1 = require("./helpers/get-roles-by-member");
const guilds_1 = require("../../../../enums/guilds");
const get_counters_config_1 = require("./helpers/get-counters-config");
const updateCounters = async (DiscordClient, guildId) => {
    const guild = await DiscordClient.getClient().guilds.fetch(guildId);
    const rolesIdsByMember = await get_roles_by_member_1.getRolesByMember(guild);
    const countersConfig = get_counters_config_1.getCountersConfig(guildId);
    const promisesToChangeChannelsNames = get_promises_to_update_counters_1.getPromisesToUpdateGuildCounters(guild, rolesIdsByMember, countersConfig);
    return promisesToChangeChannelsNames;
};
exports.updateCounters = updateCounters;
//# sourceMappingURL=index.js.map