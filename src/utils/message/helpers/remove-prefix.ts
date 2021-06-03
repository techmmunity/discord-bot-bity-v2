import { CONFIG } from "config";

export const removePrefix = (content: string) => {
	const prefix = CONFIG.prefix;

	const messageWithoutPrefix = content.replace(prefix, "");

	const messageWithputCommand = messageWithoutPrefix
		.split(" ")
		.slice(1)
		.join(" ");

	return messageWithputCommand;
};
