"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromisesToUpdateGuildCounters = exports.getChannel = void 0;
const getChannel = (guild, counter) => guild.channels.cache.get(counter.channelId);
exports.getChannel = getChannel;
const hasAllRoles = (rolesIds) => {
    return (memberRoles) => rolesIds.every((roleId) => memberRoles.includes(roleId));
};
const qtdHasAllRoles = (rolesIdsByMember, rolesIds) => {
    if (!rolesIds)
        return 0;
    const membersThatHasAllRoles = rolesIdsByMember.filter(hasAllRoles(rolesIds));
    return membersThatHasAllRoles.length;
};
const doesntHasAllRoles = (rolesIds) => (memberRoles) => rolesIds.every((roleId) => !memberRoles.includes(roleId));
const qtdDoesntHasAllRoles = (rolesIdsByMember, rolesIds) => {
    if (!rolesIds)
        return rolesIdsByMember.length;
    const membersThatDoesntHasAllRoles = rolesIdsByMember.filter(doesntHasAllRoles(rolesIds));
    return membersThatDoesntHasAllRoles.length;
};
const getCounterQtd = (rolesIdsByMember, counterConfig) => {
    if (counterConfig.hasAllRoles) {
        return qtdHasAllRoles(rolesIdsByMember, counterConfig.hasAllRoles);
    }
    if (counterConfig.doesntHasAnyOfRoles) {
        return qtdDoesntHasAllRoles(rolesIdsByMember, counterConfig.doesntHasAnyOfRoles);
    }
    return 0;
};
const getPromisesToUpdateGuildCounters = (guild, rolesIdsByMember, countersConfig) => countersConfig.map(counterConfig => {
    const qtd = getCounterQtd(rolesIdsByMember, counterConfig);
    const channel = exports.getChannel(guild, counterConfig);
    const newChannelName = `${counterConfig.channelName} Count: ${qtd}`;
    if (channel.name !== newChannelName) {
        return channel.setName(newChannelName);
    }
});
exports.getPromisesToUpdateGuildCounters = getPromisesToUpdateGuildCounters;
//# sourceMappingURL=get-promises-to-update-counters.js.map