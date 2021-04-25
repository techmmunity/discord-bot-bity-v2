import { Injectable } from "@nestjs/common";
import { On, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { BumpGuard } from "./bump.guard";
import { success } from "./service/sucess";

import { ActiveGuildGuard } from "api/common/active-guild.guard";

@Injectable()
@UseGuards(ActiveGuildGuard, BumpGuard)
export class BumpEvent {
	@On({ event: "message" })
	public sucess(message: Message) {
		return success(message);
	}
}
