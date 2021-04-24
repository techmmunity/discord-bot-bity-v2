import { ClientProvider } from "discord-nestjs";
import { GuildMember } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getMemberEmbed } from "../helpers/get-member-embed";

import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";

interface MemberAddParams {
	DiscordClient: ClientProvider;
	member: GuildMember;
}

export const memberAdd = ({ DiscordClient, member }: MemberAddParams) => {
	const guildId = member.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		DiscordClient,
		guildId,
		type: "member",
	});

	const embed = getMemberEmbed({
		title: "MEMBER ADD",
		color: Colors.green,
		member,
	});

	return channel.send(embed);
};
