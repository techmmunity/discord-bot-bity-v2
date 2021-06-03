import { Message } from "discord.js";

import { getFlagsUnformatted } from "./get-flags";
import { removePrefix } from "./helpers/remove-prefix";

export const getArgs = (message: Message) => {
	const flags = getFlagsUnformatted(message);

	const messageContent = removePrefix(message.content);

	const messageWithoutflags = flags.reduce(
		(newMessageContent, flag) => newMessageContent.replace(flag, ""),
		messageContent,
	);

	return messageWithoutflags.split(" ");
};
