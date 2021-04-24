import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getEmbed } from "./get-embed";

import { GuildEnum } from "enums/guilds";

interface MessageParams {
	DiscordClient: ClientProvider;
	message: Message;
	title: string;
	color: string;
}

export const message = ({
	DiscordClient,
	message,
	title,
	color,
}: MessageParams) => {
	const guildId = message.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		DiscordClient,
		guildId,
		type: "message",
	});

	const embed = getEmbed({
		title,
		color,
		message,
	});

	return channel.send(embed);
};
