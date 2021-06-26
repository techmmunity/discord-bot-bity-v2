import { Message, MessageEmbed } from "discord.js";

import { markdownUtil } from "utils/markdown";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

interface SendDoesntHasRoleEmbedParams {
	message: Message;
}

export const sendDoesntHasRoleEmbed = ({
	message,
}: SendDoesntHasRoleEmbedParams) => {
	const roleName = markdownUtil.bold("Bump Rush");

	const embed = new MessageEmbed()
		.setTitle("Thanks, but you aren't one of our warriors")
		.setColor(COLORS.red)
		.setImage(IMAGES.noWayJose)
		.setDescription(
			`You need have the ${roleName} role to get rewards for the bump.\n Unlock it on <#${
				ChannelEnum[message.guild?.id as GuildEnum].UNLOCK_CHANNELS
			}> channel.`,
		);

	return message.channel.send(embed);
};
