import { Message } from "discord.js";

import { Config } from "config";

const { NODE_ENV } = process.env;

const FLAGS_REGEX = /--[^\s]+(?:='[^']+'|=[^\s]+)|--[^\s]+/g;

export interface Flags {
	[flag: string]: string | boolean;
}

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

const isFlagWithValue = (value: string) => value.includes("=");

const isFlagWithContinuosValue = (value: string) =>
	value.includes(Config.flagDelimiter);

const getFlagAndValue = (flag: string) => ({
	flag: flag.split("=").shift() as string,
	value: flag.split("=").pop() as string,
});

const getFlagAndContinuosValue = (flag: string) => {
	const flagKey = flag.split("=").shift() as string;

	const unformattedValue = flag.split("=").pop() as string;
	const formattedValue = unformattedValue.replace(
		new RegExp(Config.flagDelimiter, "g"),
		"",
	);

	return {
		flag: flagKey,
		continuosValue: formattedValue,
	};
};

const getFlagKeyFormatted = (flagKey: string) =>
	flagKey.slice(Config.flagPrefix.length);

const formatFlags = (flags: RegExpMatchArray) =>
	flags.reduce((acc, cur) => {
		if (isFlagWithValue(cur)) {
			const { flag, continuosValue } = getFlagAndContinuosValue(cur);
			acc[flag] = continuosValue;
			return acc;
		}

		if (isFlagWithContinuosValue(cur)) {
			const { flag: flagC, value } = getFlagAndValue(cur);
			acc[flagC] = value;
			return acc;
		}

		const formatFlagKey = getFlagKeyFormatted(cur);
		acc[formatFlagKey] = true;
		return acc;
	}, {} as Flags);

export const getFlags = (message: Message) => {
	const messageContent = removePrefix(message.content);

	const flags = messageContent.match(FLAGS_REGEX);

	if (flags) {
		return formatFlags(flags);
	}

	return {} as Flags;
};
