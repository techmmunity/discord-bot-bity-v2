import { Collection, Message, MessageEmbed, TextChannel } from "discord.js";

import { messageUtil } from "utils/message";

import { COLORS } from "assets/colors";

const filterMessages = (messages: Collection<string, Message>) =>
	messages.filter(message => !message.pinned);

const sendEmbedMessage = async (message: Message, qtd: number) => {
	const embed = new MessageEmbed()
		.setColor(COLORS.blue)
		.setTitle(`${qtd} messages have been successfully deleted!`);

	await messageUtil.sendAndDelete(message, embed, 2.5);
};

export const clear = async (message: Message) => {
	const args = messageUtil.getArgs(message);

	const qtdToDelete = Number(args.shift() as string);

	if (isNaN(qtdToDelete) || qtdToDelete > 99) {
		throw new Error("INVALID_LIMIT");
	}

	const messagesToDelete = await message.channel.messages.fetch({
		limit: qtdToDelete + 1,
	});

	const filteredMessages = filterMessages(messagesToDelete);

	if (filteredMessages.size > 0) {
		await (message.channel as TextChannel).bulkDelete(filteredMessages);
	}

	await sendEmbedMessage(message, messagesToDelete.size - 1);
};
