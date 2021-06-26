import { Guild, Message, MessageEmbed, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { CONFIG } from "config";

import { getMainColor } from "assets/colors";

const getSuggestChannel = (message: Message) => {
	const guild = message.guild as Guild;

	return guild.channels.cache.get(
		ChannelEnum[guild.id as GuildEnum].SUGGESTIONS,
	) as TextChannel;
};

const getNickname = (message: Message) =>
	message.member?.nickname || message.author.username;

const getSuggestion = (message: Message) => {
	const command = `${CONFIG.prefix}suggest`;

	return message.content.replace(command, "");
};

export const suggest = async (message: Message) => {
	const suggestionsChannel = getSuggestChannel(message);

	const embed = new MessageEmbed()
		.setColor(getMainColor(message.guild?.id as string))
		.setAuthor(getNickname(message), message.author.avatarURL() as string)
		.setDescription(getSuggestion(message));

	const suggestion = await suggestionsChannel.send(embed);

	await Promise.all([suggestion.react("👍"), suggestion.react("👎")]);
};
