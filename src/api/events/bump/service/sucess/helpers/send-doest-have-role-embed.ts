import { GuildMember, Message, MessageEmbed } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendDoesntHasRoleEmbedParams {
	message: Message;
	member: GuildMember;
}

export const sendDoesntHasRoleEmbed = ({
	member,
	message,
}: SendDoesntHasRoleEmbedParams) => {
	const guildId = member.guild.id as GuildEnum;

	const embed = new MessageEmbed()
		.setTitle("Thanks, but you aren't one of our warriors")
		.setColor(Colors.red)
		.setThumbnail(Images.noWayJose)
		.setDescription(
			`You need have the <@${RolesEnum[guildId].BUMP}> role to get rewards for the bump. Unlock it on <#${ChannelEnum[guildId].UNLOCK_CHANNELS}> channel.`,
		)
		.addFields([
			{
				name: "Bytes reward:",
				value: "0",
				inline: true,
			},
			{
				name: "Card progress:",
				value: "0 / 100",
				inline: true,
			},
		]);

	return message.channel.send(embed);
};
