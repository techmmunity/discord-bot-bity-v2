import { ClientProvider } from "discord-nestjs";

import { getPromisesToUpdateGuildCounters } from "./helpers/get-promises-to-update-counters";
import { getRolesByMember } from "./helpers/get-roles-by-member";

import { GuildEnum } from "enums/guilds";

import { getCountersConfig } from "./helpers/get-counters-config";

export const updateCounters = async (
	discordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = await discordClient.getClient().guilds.fetch(guildId);

	const rolesIdsByMember = await getRolesByMember(guild);

	const countersConfig = getCountersConfig(guildId);

	const promisesToChangeChannelsNames = getPromisesToUpdateGuildCounters(
		guild,
		rolesIdsByMember,
		countersConfig,
	);

	return promisesToChangeChannelsNames;
};
