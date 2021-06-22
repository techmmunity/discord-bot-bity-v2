import { ClientProvider } from "discord-nestjs";
import { Guild, MessageEmbed, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

const getReviewUrl = {
	[GuildEnum.PROGRAMMING]:
		"https://disboard.org/review/create/784050272263471145",
	[GuildEnum.GRAPHIC]: "",
	[GuildEnum.SOUND]: "",
	[GuildEnum.ROBOTIC]: "",
	[GuildEnum.MANAGEMENT]: "",
};

const join = (...strings: Array<string>) => strings.join("\n");

const makeEmbed = (guildId: GuildEnum) =>
	new MessageEmbed()
		.setTitle(
			join(
				":flag_us: Click here, please!",
				":flag_br: Clique aqui, por favor!",
			),
		)
		.setColor(COLORS.turquoise)
		.setDescription(
			join(
				":flag_us: Guys, please, give a feedback to the server, it help us a lot! ❤️",
				":flag_br: Pessoal, por favor, avaliem o servidor, isso ajuda de mais! ❤️",
			),
		)
		.setImage(IMAGES.apesTogetherStrong)
		.setURL(getReviewUrl[guildId]);

export const sendReminder = async (
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
