import { ClientProvider } from "discord-nestjs";
import { Guild, MessageEmbed, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

const getReviewUrl = {
	[GuildEnum.PROGRAMMING]:
		"https://disboard.org/review/create/784050272263471145",
	[GuildEnum.GRAPHIC]: "",
	[GuildEnum.SOUND]: "",
	[GuildEnum.ROBOTIC]: "",
	[GuildEnum.MANAGEMENT]: "",
};

const makeEmbed = (guildId: GuildEnum) =>
	new MessageEmbed()
		.setTitle("Click here, please!")
		.setColor(Colors.turquoise)
		.setDescription(
			"Guys, please, give a feedback to the server, it help us a lot! ❤️",
		)
		.setImage(Images.apesTogetherStrong)
		.setURL(getReviewUrl[guildId]);

export const sendReminder = async (
	DiscordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = DiscordClient.getClient().guilds.cache.get(guildId) as Guild;

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].GENERAL,
	) as TextChannel;

	const embed = makeEmbed(guildId);

	await channel.send(embed);
};
