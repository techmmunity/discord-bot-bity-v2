import { Client } from "discord.js";

import { getActiveGuilds } from "config/active-guilds";

interface BanParams {
	client: Client;
	guildId: string;
	userId: string;
}

export const ban = async ({ guildId, userId, client }: BanParams) => {
	const guildsIds = getActiveGuilds()
		.filter(id => id !== guildId)
		.filter(Boolean);

	const guilds = await Promise.all(
		guildsIds.map(id => client.guilds.fetch(id)),
	);

	const guildMembers = await Promise.all(
		guilds.map(guild => guild.members.fetch(userId)),
	).then(members => members.filter(Boolean));

	await Promise.all(guildMembers.map(guildMember => guildMember.ban()));
};
