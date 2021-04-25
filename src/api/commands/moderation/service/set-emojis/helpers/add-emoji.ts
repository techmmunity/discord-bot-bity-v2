import { Message } from "discord.js";
import fetch from "node-fetch";

interface AddEmojiParams {
	message: Message;
	name: string;
	url: string;
}

export const addEmoji = async ({ message, name, url }: AddEmojiParams) => {
	const response = await fetch(url, {
		method: "GET",
	});

	const imageBuffer = await response.buffer();

	return message.guild?.emojis.create(imageBuffer, name);
};
