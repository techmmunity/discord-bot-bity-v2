import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { TechTeam } from "config/tech-team";

export class TechTeamGuard implements DiscordGuard {
	public async canActive(
		event: keyof ClientEvents,
		[context]: [Message],
	): Promise<boolean> {
		const notMessage = event !== "message";

		if (notMessage) return true;

		const isTechTeamMember = Boolean(
			context.member?.roles.cache.get(TechTeam.staffRole),
		);

		return isTechTeamMember;
	}
}
