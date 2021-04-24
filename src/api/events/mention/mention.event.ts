import { Injectable } from "@nestjs/common";
import { On, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { bot } from "./service/bot";

import { ActiveGuildGuard } from "api/common/active-guild.guard";

@Injectable()
@UseGuards(ActiveGuildGuard)
export class MentionEvent {
	@On({ event: "message" })
	public bot(message: Message) {
		return bot(message);
	}
}
