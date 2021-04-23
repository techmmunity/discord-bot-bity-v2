import { Guild, VoiceChannel } from "discord.js";

import { RolesIds, CounterConfig } from "../types";

/**
 *
 * Get Channel
 *
 */

export const getChannel = (guild: Guild, counter: CounterConfig) =>
	guild.channels.cache.get(counter.channelId) as VoiceChannel;

/**
 *
 * Has roles
 *
 */

const hasAllRoles = (rolesIds: RolesIds) => {
	return (memberRoles: RolesIds) =>
		rolesIds.every((roleId: string) => memberRoles.includes(roleId));
};

const qtdHasAllRoles = (
	rolesIdsByMember: Array<RolesIds>,
	rolesIds: RolesIds,
) => {
	// Remember: Empty Arrays Also Are Truly
	if (!rolesIds) return 0;

	const membersThatHasAllRoles = rolesIdsByMember.filter(hasAllRoles(rolesIds));

	return membersThatHasAllRoles.length;
};

/**
 *
 * Doesn't has roles
 *
 */

const doesntHasAllRoles = (rolesIds: RolesIds) => (memberRoles: RolesIds) =>
	rolesIds.every((roleId: string) => !memberRoles.includes(roleId));

const qtdDoesntHasAllRoles = (
	rolesIdsByMember: Array<RolesIds>,
	rolesIds: RolesIds,
) => {
	// Remember: Empty Arrays Also Are Truly
	if (!rolesIds) return rolesIdsByMember.length;

	const membersThatDoesntHasAllRoles = rolesIdsByMember.filter(
		doesntHasAllRoles(rolesIds),
	);

	return membersThatDoesntHasAllRoles.length;
};

/**
 *
 * Get Counters Qtd
 *
 */

const getCounterQtd = (
	rolesIdsByMember: Array<RolesIds>,
	counterConfig: CounterConfig,
) => {
	if (counterConfig.hasAllRoles) {
		return qtdHasAllRoles(rolesIdsByMember, counterConfig.hasAllRoles);
	}

	if (counterConfig.doesntHasAnyOfRoles) {
		return qtdDoesntHasAllRoles(
			rolesIdsByMember,
			counterConfig.doesntHasAnyOfRoles,
		);
	}

	return 0;
};

/**
 *
 * Get Promises To Update Counters
 *
 */

export const getPromisesToUpdateGuildCounters = (
	guild: Guild,
	rolesIdsByMember: Array<RolesIds>,
	countersConfig: Array<CounterConfig>,
) =>
	countersConfig.map(counterConfig => {
		const qtd = getCounterQtd(rolesIdsByMember, counterConfig);

		const channel = getChannel(guild, counterConfig);

		const newChannelName = `${counterConfig.channelName} Count: ${qtd}`;

		if (channel.name !== newChannelName) {
			return channel.setName(newChannelName);
		}
	});
