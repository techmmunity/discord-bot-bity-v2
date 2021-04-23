import { Message } from "discord.js";

import { Config } from "config";

const { NODE_ENV } = process.env;

const ARGS_REGEX = /\s+|--[a-zA-Z]+='[^']+'/g;

const getPrefix = () =>
	NODE_ENV === "production" ? Config.prfixPrd : Config.prfixDev;

const removePrefix = (content: string) => {
	const prefix = getPrefix();

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
