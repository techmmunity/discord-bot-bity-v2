import { Message } from "discord.js";

export const getEmojisByType = (message: Message) => {
	const qtd = {
		regular: 0,
		animated: 0,
	};

	message.guild?.emojis.cache.forEach(emoji =>
		emoji.animated ? qtd.animated++ : qtd.regular++,
	);

	return qtd;
};
