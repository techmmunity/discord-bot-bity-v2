import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { TechTeam } from "config/tech-team";

const { NODE_ENV } = process.env;

export class DevGuard implements DiscordGuard {
	public async canActive(
		event: keyof ClientEvents,
		[context]: [Message],
	): Promise<boolean> {
		const notDevEnv = NODE_ENV !== "dev";

		if (notDevEnv) return true;

		const notMessage = event !== "message";

		if (notMessage) return true;

		const isTechTeamMember = Boolean(
			context.member?.roles.cache.get(TechTeam.staffRole),
		);

		return isTechTeamMember;
	}
}
