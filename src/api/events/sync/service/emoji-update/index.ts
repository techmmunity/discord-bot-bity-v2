import { Client, GuildEmoji } from "discord.js";

import { getActiveGuilds } from "config/active-guilds";

interface EmojiUpdateParams {
	client: Client;
	oldEmoji: GuildEmoji;
	newEmoji: GuildEmoji;
}

export const emojiUpdate = async ({
	client,
	oldEmoji,
	newEmoji,
}: EmojiUpdateParams) => {
	const guildsIds = getActiveGuilds()
		.filter(id => id !== oldEmoji.guild.id)
		.filter(Boolean);

	const guilds = await Promise.all(
		guildsIds.map(id => client.guilds.fetch(id)),
	);

	const emojis = guilds
		.map(guild =>
			guild.emojis.cache.find(emoji => emoji.name === oldEmoji.name),
		)
		.filter(Boolean);

	if (emojis.length < 1) return;

	await Promise.all(
		emojis.map(emoji =>
			emoji?.edit({
				name: newEmoji.name,
			}),
		),
	);
};
