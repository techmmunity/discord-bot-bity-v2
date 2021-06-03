import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { URLS } from "config/url";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

interface SendMessageParams {
	discordClient: ClientProvider;
	guildId: GuildEnum;
	hangoverChannel: TextChannel;
}

export const sendMessage = async ({
	discordClient,
	guildId,
	hangoverChannel,
}: SendMessageParams) => {
	const guild = getGuild(discordClient, guildId);

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].EVENTS,
	) as TextChannel;

	const embed = new MessageEmbed()
		.setTitle("Hey guys, guess what day it is?")
		.setDescription("That's right, chatting day!")
		.setColor(COLORS.blue)
		.setThumbnail(IMAGES.bityGif)
		.addField("Join us on twitch!", URLS.TWITCH)
		.addField("Or at the discord", `<#${hangoverChannel.id}>`);

	const message = await channel.send(embed);

	await message.crosspost();
};
