import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, GuildMember, Invite, Message } from "discord.js";

import { GuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";

export class ActiveGuildGuard implements DiscordGuard {
	public canActive(
		_: keyof ClientEvents,
		[context]: [GuildMember | Invite | Message],
	) {
		const guildId = context.guild?.id as GuildEnum;

		return getActiveGuilds().includes(guildId);
	}
}
