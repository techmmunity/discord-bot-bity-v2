import { ClientProvider } from "discord-nestjs";

import { getGuild } from "../helpers/get-guild";

interface DeleteChannelParams {
	discordClient: ClientProvider;
	guildId: string;
	categoryName: string;
	channelName: string;
}

export const deleteChannel =
	({
		discordClient,
		guildId,
		categoryName,
		channelName,
	}: DeleteChannelParams) =>
	async () => {
		const guild = getGuild(discordClient, guildId);

		const textChannel = guild.channels.cache.find(
			channel => channel.name === channelName && channel.type === "text",
		);

		const voiceChannel = guild.channels.cache.find(
			channel => channel.name === channelName && channel.type === "voice",
		);

		const category = guild.channels.cache.find(
			channel => channel.name === categoryName,
		);

		await Promise.all([
			textChannel?.delete(),
			voiceChannel?.delete(),
			category?.delete(),
		]);
	};
