import { Message, MessageEmbed } from "discord.js";

import { MarkdownUtil } from "utils/markdown";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendDoesntHasRoleEmbedParams {
	message: Message;
}

export const sendDoesntHasRoleEmbed = ({
	message,
}: SendDoesntHasRoleEmbedParams) => {
	const roleName = MarkdownUtil.bold("Bump Rush");

	const channelName = MarkdownUtil.bold("🔓┊unlock-channels");

	const embed = new MessageEmbed()
		.setTitle("Thanks, but you aren't one of our warriors")
		.setColor(Colors.red)
		.setImage(Images.noWayJose)
		.setDescription(
			`You need have the ${roleName} role to get rewards for the bump.\n Unlock it on ${channelName} channel.`,
		);

	return message.channel.send(embed);
};
