import { ClientProvider } from "discord-nestjs";
import { Role } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

interface CreateChannelParams {
	discordClient: ClientProvider;
	guildId: GuildEnum;
	categoryName: string;
	channelName: string;
}

export const createChannel = async ({
	discordClient,
	guildId,
	categoryName,
	channelName,
}: CreateChannelParams) => {
	const guild = getGuild(discordClient, guildId);

	const registredRole = guild.roles.cache.get(
		RolesEnum[guildId].REGISTRED,
	) as Role;

	const everyoneRole = guild.roles.cache.find(
		role => role.name === "@everyone",
	) as Role;

	const hangoverFridayCategory = await guild.channels.create(categoryName, {
		type: "category",
		position: 0,
		permissionOverwrites: [
			{
				id: registredRole,
				allow: ["VIEW_CHANNEL"],
			},
			{
				id: everyoneRole,
				deny: ["VIEW_CHANNEL"],
			},
		],
	});

	const [textChannel] = await Promise.all([
		guild.channels.create(channelName, {
			type: "text",
			parent: hangoverFridayCategory,
		}),
		guild.channels.create(channelName, {
			type: "voice",
			parent: hangoverFridayCategory,
		}),
	]);

	return textChannel;
};
