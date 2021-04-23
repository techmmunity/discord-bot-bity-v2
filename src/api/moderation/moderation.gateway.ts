import { Injectable } from "@nestjs/common";
import { TechTeamGuard } from "common/tech-team.guard";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { clear } from "./service/clear";

@Injectable()
@UseGuards(TechTeamGuard)
export class ModerationGateway {
	@OnCommand({ name: "clear" })
	public async clear(message: Message) {
		return clear(message);
	}
}
