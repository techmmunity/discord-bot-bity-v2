import { Message } from "discord.js";

import { addEmoji } from "./helpers/add-emoji";
import { getEmojisToAdd } from "./helpers/get-emojis-to-add";
import { sendEndEmbed } from "./helpers/send-end-embed";
import { sendStartEmbed } from "./helpers/send-start-embed";

import { Emojis } from "assets/images/emojis";

export const setEmojis = async (message: Message) => {
	const emojisToAdd = getEmojisToAdd(message);

	await sendStartEmbed(message);

	for (const emojiName of emojisToAdd) {
		await addEmoji({
			message,
			name: emojiName,
			url: Emojis.static[emojiName as keyof typeof Emojis.static],
		});
	}

	await sendEndEmbed({
		message,
		emojisCreatedQtd: emojisToAdd.length,
	});
};
