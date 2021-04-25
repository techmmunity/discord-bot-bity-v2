import { Config } from "config";

export const removePrefix = (content: string) => {
	const prefix = Config.prefix;

	const messageWithoutPrefix = content.replace(prefix, "");

	const messageWithputCommand = messageWithoutPrefix
		.split(" ")
		.slice(1)
		.join(" ");

	return messageWithputCommand;
};
