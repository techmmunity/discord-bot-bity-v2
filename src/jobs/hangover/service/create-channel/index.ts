import { ClientProvider } from "discord-nestjs";
import { Role } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

interface CreateChannelParams {
	DiscordClient: ClientProvider;
	guildId: GuildEnum;
	categoryName: string;
	channelName: string;
}

export const createChannel = ({
	DiscordClient,
	guildId,
	categoryName,
	channelName,
}: CreateChannelParams) => async () => {
	const guild = getGuild(DiscordClient, guildId);

	const registredRole = guild.roles.cache.get(
		RolesEnum[guildId].REGISTRED,
	) as Role;

	const everyoneRole = guild.roles.cache.find(
		role => role.name === "@everyone",
	) as Role;

	const HangoverFridayCategory = await guild.channels.create(categoryName, {
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

	await guild.channels.create(channelName, {
		type: "voice",
		parent: HangoverFridayCategory,
	});
};
