import { ClientProvider } from "discord-nestjs";
import { Guild, MessageEmbed, TextChannel } from "discord.js";

import { join } from "utils/join";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { getMainColor } from "assets/colors";
import { IMAGES } from "assets/images";

const getReviewUrl = {
	[GuildEnum.DEV]: "https://disboard.org/review/create/784050272263471145",
	[GuildEnum.GRAPHIC]: "",
	[GuildEnum.SOUND]: "",
	[GuildEnum.ROBOTIC]: "",
	[GuildEnum.MANAGEMENT]: "",
	[GuildEnum.MARKETING]: "",
};

const makeEmbed = (guildId: GuildEnum) =>
	new MessageEmbed()
		.setTitle(
			join(
				":flag_us: Click here, please!",
				":flag_br: Clique aqui, por favor!",
			),
		)
		.setColor(getMainColor(guildId))
		.setDescription(
			join(
				":flag_us: Guys, please, give a feedback to the server, it help us a lot! ❤️",
				":flag_br: Pessoal, por favor, avaliem o servidor, isso ajuda de mais! ❤️",
			),
		)
		.setImage(IMAGES.apesTogetherStrong)
		.setURL(getReviewUrl[guildId]);

export const sendReviewReminder = async (
	discordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = discordClient.getClient().guilds.cache.get(guildId) as Guild;

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].GENERAL,
	) as TextChannel;

	const embed = makeEmbed(guildId);

	await channel.send(embed);
};
