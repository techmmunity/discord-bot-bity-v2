import { ClientProvider } from "discord-nestjs";
import { Guild } from "discord.js";

import { getPromisesToUpdateGuildCounters } from "./helpers/get-promises-to-update-counters";
import { getRolesByMember } from "./helpers/get-roles-by-member";

import { GuildEnum } from "enums/guilds";

import { getCountersConfig } from "./helpers/get-counters-config";

export const updateCounters = async (
	DiscordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = DiscordClient.getClient().guilds.cache.get(guildId) as Guild;

	const rolesIdsByMember = await getRolesByMember(guild);

	const countersConfig = getCountersConfig(guildId);

	const promisesToChangeChannelsNames = getPromisesToUpdateGuildCounters(
		guild,
		rolesIdsByMember,
		countersConfig,
	);

	return promisesToChangeChannelsNames;
};
