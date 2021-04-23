import { ClientProvider } from "discord-nestjs";

import { getGuild } from "../helpers/get-guild";

interface DeleteChannelParams {
	DiscordClient: ClientProvider;
	guildId: string;
	categoryName: string;
	channelName: string;
}

export const deleteChannel = ({
	DiscordClient,
	guildId,
	categoryName,
	channelName,
}: DeleteChannelParams) => async () => {
	const guild = getGuild(DiscordClient, guildId);

	const channel = guild.channels.cache.find(
		channel => channel.name === channelName,
	);

	const category = guild.channels.cache.find(
		channel => channel.name === categoryName,
	);

	await Promise.all([channel?.delete(), category?.delete()]);
};
