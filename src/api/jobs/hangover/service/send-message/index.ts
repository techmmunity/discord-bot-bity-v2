import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { Urls } from "config/url";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendMessageParams {
	DiscordClient: ClientProvider;
	guildId: GuildEnum;
	channelName: string;
}

export const sendMessage = async ({
	DiscordClient,
	guildId,
	channelName,
}: SendMessageParams) => {
	const guild = getGuild(DiscordClient, guildId);

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].EVENTS,
	) as TextChannel;

	const embed = new MessageEmbed()
		.setTitle("Hey guys, guess what day it is?")
		.setDescription("That's right, chatting day!")
		.setColor(Colors.blue)
		.setThumbnail(Images.bityGif)
		.addField("Join us on twitch!", Urls.TWITCH)
		.addField("Or at the discord", `#${channelName}`);

	const message = await channel.send(embed);

	await message.crosspost();
};
