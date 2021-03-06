import { GuildMember, Message, MessageEmbed, TextChannel } from "discord.js";

import { memberUtil } from "utils/member";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { getMainColor } from "assets/colors";

export const sendWelcomeMessage = (
	message: Message,
	member: GuildMember,
	guildId: GuildEnum,
) => {
	const TITLE =
		":flag_us: Welcome to Techmmunity!\n:flag_br: Bem vindo a Techmmunity!";
	const DESCRIPTION =
		":flag_us: {userMention} ({userTag}), say hi to everyone!\n:flag_br: {userMention} ({userTag}), manda um oi pro pessoal!";

	const titleFormatted = memberUtil.formatMessage(member, TITLE);
	const descriptionFormatted = memberUtil.formatMessage(member, DESCRIPTION);

	const memberCount = memberUtil.getGuildMemberCount(member);

	const embed = new MessageEmbed()
		.setColor(getMainColor(guildId))
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

	return welcomeMessageChannel.send({
		content: `<@${member.user.id}>`,
		embed,
	});
};
