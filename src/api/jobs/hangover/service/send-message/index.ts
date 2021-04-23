import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendMessageParams {
	DiscordClient: ClientProvider;
	guildId: GuildEnum;
	channelName: string;
}

export const sendMessage = ({
	DiscordClient,
	guildId,
	channelName,
}: SendMessageParams) => async () => {
	const guild = getGuild(DiscordClient, guildId);

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].EVENTS,
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
