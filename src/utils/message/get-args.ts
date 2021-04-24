import { Message } from "discord.js";

import { Config } from "config";

const ARGS_REGEX = /\s+|--[a-zA-Z]+='[^']+'/g;

const removePrefix = (content: string) => {
	const prefix = Config.prefix;

	const messageWithoutPrefix = content.replace(prefix, "");

	const messageWithputCommand = messageWithoutPrefix
		.split(" ")
		.slice(1)
		.join(" ");

	return messageWithputCommand;
};

export const getArgs = (message: Message) => {
	const messageContent = removePrefix(message.content);

	const args = messageContent.match(ARGS_REGEX) as RegExpMatchArray;

	return args;
};
