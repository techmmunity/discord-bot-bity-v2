import { Injectable } from "@nestjs/common";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { clear } from "./service/clear";
import { setEmojis } from "./service/set-emojis";

import { TechTeamGuard } from "api/common/tech-team.guard";

@Injectable()
@UseGuards(TechTeamGuard)
export class ModerationGateway {
	@OnCommand({ name: "clear" })
	public clear(message: Message) {
		return clear(message);
	}

	@OnCommand({ name: "set-emojis" })
	public setEmojis(message: Message) {
		return setEmojis(message);
	}
}
