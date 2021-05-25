import { Message } from "discord.js";

const getEmoji = (messageContent: string) =>
	/<:.+:(\d+)>/.exec(messageContent)?.pop() as string;

const getAnimatedEmoji = (messageContent: string) =>
	/<a:.+:(\d+)>/.exec(messageContent)?.pop() as string;

const getEmojiUrl = (emoji: string) =>
	`https://cdn.discordapp.com/emojis/${emoji}.png?v=1`;

const getAnimatedEmojiUrl = (emoji: string) =>
	`https://cdn.discordapp.com/emojis/${emoji}.gif?v=1`;

export const emoji = async (message: Message) => {
	const emoji = getEmoji(message.content);

	if (emoji) {
		const emojiUrl = getEmojiUrl(emoji);

		return message.channel.send(emojiUrl);
	}

	const animatedEmoji = getAnimatedEmoji(message.content);

	if (animatedEmoji) {
		const animatedEmojiUrl = getAnimatedEmojiUrl(animatedEmoji);

		return message.channel.send(animatedEmojiUrl);
	}

	throw new Error("MISSING_ARGUMENT");
};
