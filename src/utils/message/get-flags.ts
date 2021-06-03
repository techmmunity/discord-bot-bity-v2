import { Message } from "discord.js";

import { removePrefix } from "./helpers/remove-prefix";

import { CONFIG } from "config";

const FLAGS_REGEX = /--[^\s]+(?:='[^']+'|=[^\s]+)|--[^\s]+/g;

const isFlagWithValue = (value: string) => value.includes("=");

const isFlagWithContinuosValue = (value: string) =>
	value.includes(CONFIG.flagDelimiter);

const getFlagAndValue = (flag: string) => ({
	flag: flag.split("=").shift() as string,
	value: flag.split("=").pop() as string,
});

const getFlagAndContinuosValue = (flag: string) => {
	const flagKey = flag.split("=").shift() as string;

	const unformattedValue = flag.split("=").pop() as string;
	const formattedValue = unformattedValue.replace(
		new RegExp(CONFIG.flagDelimiter, "g"),
		"",
	);

	return {
		flag: flagKey,
		continuosValue: formattedValue,
	};
};

const getFlagKeyFormatted = (flagKey: string) =>
	flagKey.slice(CONFIG.flagPrefix.length);

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

export const getFlagsUnformatted = (message: Message) => {
	const messageContent = removePrefix(message.content);

	return messageContent.match(FLAGS_REGEX) || [];
};

export const getFlags = (message: Message) => {
	const flags = getFlagsUnformatted(message);

	return formatFlags(flags);
};

export type Flags = Record<string, boolean | string>;
