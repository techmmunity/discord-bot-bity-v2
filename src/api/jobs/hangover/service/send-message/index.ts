import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";

import { getGuild } from "../helpers/get-guild";

import { join } from "utils/join";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

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
		.setTitle(
			join(
				":flag_us: Hey guys, guess what day it is?",
				":flag_br: Ei pessoal, adivinhem que dia é hoje?",
			),
		)
		.setDescription(
			join(
				":flag_us: That's right, chatting day!",
				":flag_br: É isso ai, dia de conversar!",
			),
		)
		.setColor(COLORS.blue)
		.setThumbnail(IMAGES.bityGif)
		.addField(":flag_us: Join us at:", `<#${hangoverChannel.id}>`)
		.addField(":flag_br: Chegae no:", `<#${hangoverChannel.id}>`);

	const message = await channel.send(embed);

	await message.crosspost();
};
