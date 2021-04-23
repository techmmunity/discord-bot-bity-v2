import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export class TechTeamGuard implements DiscordGuard {
	public async canActive(
		event: keyof ClientEvents,
		[context]: [Message],
	): Promise<boolean> {
		const notMessage = event !== "message";

		if (notMessage) return true;

		const guildId = context.guild?.id;

		if (!guildId) return false;

		const roleId = RolesEnum[guildId as GuildEnum].STAFF;

		if (!roleId) return false;

		const hasStaffRole = context.member?.roles.cache.has(roleId) || false;

		return hasStaffRole;
	}
}
