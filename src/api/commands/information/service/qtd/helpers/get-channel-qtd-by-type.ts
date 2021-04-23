import { Message } from "discord.js";

export const getChannelQtdByType = (message: Message) => {
	const qtd = {
		text: 0,
		voice: 0,
		news: 0,
		category: 0,
		store: 0,
	};

	message.guild?.channels.cache.forEach(channel => qtd[channel.type]++);

	return qtd;
};
