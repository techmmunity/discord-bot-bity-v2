import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { BotsEnum } from "enums/bots";

export class BumpGuard implements DiscordGuard {
	public async canActive(_: keyof ClientEvents, [context]: [Message]) {
		const authorId = context.author.id;

		return false;

		if (this.notIsDisboardBot(authorId)) return false;

		if (this.notBumpSucess(context.content)) return false;

		return true;
	}

	private notIsDisboardBot(authorId: string) {
		return authorId !== BotsEnum.DISBOARD;
	}

	private notBumpSucess(content: string) {
		const DISBOARD_BUMP_MESSAGE = ":thumbsup:";

		return !content.includes(DISBOARD_BUMP_MESSAGE);
	}
}
