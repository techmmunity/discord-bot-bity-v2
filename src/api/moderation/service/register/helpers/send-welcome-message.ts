import { GuildMember, Message, MessageEmbed, TextChannel } from "discord.js";

import { MemberUtil } from "utils/member";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";

export const sendWelcomeMessage = (
	message: Message,
	member: GuildMember,
	guildId: GuildEnum,
) => {
	const TITLE = "Welcome to Techmmunity!";
	const DESCRIPTION = "{userMention} ({userTag}), say hi to everyone!";

	const titleFormatted = MemberUtil.formatMessage(member, TITLE);
	const descriptionFormatted = MemberUtil.formatMessage(member, DESCRIPTION);

	const memberCount = MemberUtil.getGuildMemberCount(member);

	const embed = new MessageEmbed()
		.setColor(Colors.turquoise)
		.setTitle(titleFormatted)
		.setDescription(descriptionFormatted)
		.addFields([
			{
				name: "Member Nr:",
				value: `#${memberCount}`,
				inline: true,
			},
		])
		.setThumbnail(member.user.avatarURL({ dynamic: true }) as string);

	const welcomeMessageChannel = message.guild?.channels.cache.get(
		ChannelEnum[guildId].WELCOME_MESSAGE,
	) as TextChannel;

	return welcomeMessageChannel.send(embed);
};
