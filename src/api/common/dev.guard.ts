import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

const { NODE_ENV } = process.env;

export class DevGuard implements DiscordGuard {
	public async canActive(event: keyof ClientEvents, [context]: [Message]) {
		const notDevEnv = NODE_ENV !== "dev";

		if (notDevEnv) return true;

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
