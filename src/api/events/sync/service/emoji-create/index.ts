import { Client, Guild, GuildEmoji } from "discord.js";
import fetch from "node-fetch";

import { getActiveGuilds } from "config/active-guilds";

interface EmojiCreateParams {
	client: Client;
	emoji: GuildEmoji;
}

const filterGuildsThatAlreadyHasEmoji =
	(emoji: GuildEmoji) => (guilds: Array<Guild>) =>
		guilds.filter(guild => {
			const hasEmoji = guild.emojis.cache.find(
				guildEmoji => guildEmoji.name === emoji.name,
			);

			return Boolean(hasEmoji);
		});

export const emojiCreate = async ({ client, emoji }: EmojiCreateParams) => {
	const guildsIds = getActiveGuilds()
		.filter(id => id !== emoji.guild.id)
		.filter(Boolean);

	const guilds = await Promise.all(
		guildsIds.map(id => client.guilds.fetch(id)),
	).then(filterGuildsThatAlreadyHasEmoji(emoji));

	if (guilds.length < 1) return;

	const response = await fetch(emoji.url, {
		method: "GET",
	});

	const imageBuffer = await response.buffer();

	await Promise.all(
		guilds.map(guild => guild.emojis.create(imageBuffer, emoji.name)),
	);
};
