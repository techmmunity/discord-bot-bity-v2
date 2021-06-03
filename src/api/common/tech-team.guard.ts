import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { GuildEnum, SpecialGuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";
import { UsersEnum } from "enums/users";

export class TechTeamGuard implements DiscordGuard {
	// eslint-disable-next-line require-await
	public async canActive(
		event: keyof ClientEvents,
		[context]: [Message],
	): Promise<boolean> {
		const notMessage = event !== "message";

		if (notMessage) return true;

		return this.isSpecialGuild(context)
			? this.isTechTeamSpecialMember(context)
			: this.isTechTeamMember(context);
	}

	private isSpecialGuild(context: Message) {
		const guildId = context.guild?.id;

		if (!guildId) return false;

		return [SpecialGuildEnum.STAFF, SpecialGuildEnum.LOGS].includes(
			guildId as SpecialGuildEnum,
		);
	}

	private isTechTeamSpecialMember(context: Message) {
		return context.author.id === UsersEnum.RAZAL;
	}

	private isTechTeamMember(context: Message) {
		const guildId = context.guild?.id;

		if (!guildId) return false;
		const roleId = RolesEnum[guildId as GuildEnum].STAFF;

		if (!roleId) return false;

		const hasStaffRole = context.member?.roles.cache.has(roleId) || false;

		return hasStaffRole;
	}
}
