import { Message } from "discord.js";

import { Emojis } from "assets/images/emojis";

const getCurrentEmojis = (message: Message) =>
	message.guild?.emojis.cache.map(emoji => emoji.name) || [];

export const getEmojisToAdd = (message: Message) => {
	const emojisKeys = Object.keys(Emojis.static);

	const currentEmojis = getCurrentEmojis(message);

	const emojisToAdd = emojisKeys.filter(
		emojiKey => !currentEmojis.includes(emojiKey),
	);

	return emojisToAdd;
};
