import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, GuildMember, Invite, Message } from "discord.js";

import { GuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";

export class LogGuard implements DiscordGuard {
	public async canActive(
		_: keyof ClientEvents,
		[context]: [Message | GuildMember | Invite],
	) {
		const guildId = context.guild?.id as GuildEnum;

		return getActiveGuilds().includes(guildId);
	}
}
