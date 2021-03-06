import { Message, MessageEmbed } from "discord.js";

import { getChannelQtdByType } from "./helpers/get-channel-qtd-by-type";
import { getEmojisByType } from "./helpers/get-emojis-by-type";
import { getEmojisLimit } from "./helpers/get-emojis-limit";

import { markdownUtil } from "utils/markdown";

import { COLORS } from "assets/colors";

interface FormatNameAndValueParams {
	name: string;
	value: number | string;
}

const LINE_LENGTH = 28;

const formatNameAndValue = ({ name, value }: FormatNameAndValueParams) => {
	const limit = LINE_LENGTH - String(value).length;

	return `${name.padEnd(limit, " ")}${value}`;
};

const getDescription = (message: Message) => {
	const { text, voice, news, category, store } = getChannelQtdByType(message);
	const { regular, animated } = getEmojisByType(message);
	const emojisLimit = getEmojisLimit(message);
	const rolesLimit = message.guild?.roles.cache.size;

	const fields = [
		{
			name: "Categories",
			value: category,
		},
		"",
		{
			name: "Text Channels",
			value: text,
		},
		{
			name: "Voice Channels",
			value: voice,
		},
		{
			name: "News Channels",
			value: news,
		},
		{
			name: "Store Channels",
			value: store,
		},
		"",
		{
			name: "Regular Emojis",
			value: `${regular} / ${emojisLimit.regular}`,
		},
		{
			name: "Animated Emojis",
			value: `${animated} / ${emojisLimit.animated}`,
		},
		"",
		{
			name: "Total Roles",
			value: `${rolesLimit} / 250`,
		},
		{
			name: "Total Channels",
			value: `${text + voice + news + category + store} / 500`,
		},
	]
		.map(value =>
			typeof value === "string" ? value : formatNameAndValue(value),
		)
		.join("\n");

	return markdownUtil.codeBlock(fields);
};

export const qtd = async (message: Message) => {
	const embed = new MessageEmbed()
		.setTitle("Guild Quantities")
		.setColor(COLORS.blue)
		.setDescription(getDescription(message));

	await message.channel.send(embed);
};
