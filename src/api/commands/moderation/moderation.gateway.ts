import { Injectable } from "@nestjs/common";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { clear } from "./service/clear";
import { register } from "./service/register";

import { TechTeamGuard } from "api/common/tech-team.guard";

@Injectable()
@UseGuards(TechTeamGuard)
export class ModerationGateway {
	@OnCommand({ name: "clear" })
	public async clear(message: Message) {
		return clear(message);
	}

	@OnCommand({ name: "register" })
	public async register(message: Message) {
		return register(message);
	}
}
