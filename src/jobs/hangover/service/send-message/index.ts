import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { ChannelsEnum } from "enums/channels";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendMessageParams {
	DiscordClient: ClientProvider;
	guildId: string;
	channelName: string;
}

export const sendMessage = ({
	DiscordClient,
	guildId,
	channelName,
}: SendMessageParams) => async () => {
	const guild = getGuild(DiscordClient, guildId);

	const channel = guild.channels.cache.get(
		ChannelsEnum[guildId].EVENTS,
	) as TextChannel;

	const embed = new MessageEmbed()
		.setTitle("Hey guys, guess what day it is?")
		.setDescription("That's right, chatting day!")
		.setColor(Colors.blue)
		.setThumbnail(Images.bityGif)
		.addField("Join us on twitch!", "https://www.twitch.tv/techmmunity")
		.addField("Or at the discord", `#${channelName}`);

	await channel.send(embed);
};
