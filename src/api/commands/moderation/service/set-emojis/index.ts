import { Message } from "discord.js";

import { addEmoji } from "./helpers/add-emoji";
import { getEmojisToAdd } from "./helpers/get-emojis-to-add";
import { sendEndEmbed } from "./helpers/send-end-embed";
import { sendStartEmbed } from "./helpers/send-start-embed";

import { EMOJIS } from "assets/images/emojis";

export const setEmojis = async (message: Message) => {
	const emojisToAdd = getEmojisToAdd(message);

	await sendStartEmbed(message);

	for (const emojiName of emojisToAdd) {
		/**
		 * ESLint is disabled because we can't use Promise.all,
		 * since the discord api has a requests / second limit,
		 * so we need to do it one at time
		 */
		// eslint-disable-next-line no-await-in-loop
		await addEmoji({
			message,
			name: emojiName,
			url: EMOJIS.static[emojiName as keyof typeof EMOJIS.static],
		});
	}

	await sendEndEmbed({
		message,
		emojisCreatedQtd: emojisToAdd.length,
	});
};
