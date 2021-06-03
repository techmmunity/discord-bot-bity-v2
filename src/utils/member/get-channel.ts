import { GuildMember, PartialGuildMember, TextChannel } from "discord.js";

export const getChannel = (
	member: GuildMember | PartialGuildMember,
	channelId: string,
) => member.guild.channels.cache.get(channelId) as TextChannel;
