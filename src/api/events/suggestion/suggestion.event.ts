import { Injectable } from "@nestjs/common";
import { On, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { suggest } from "./service/suggest";
import { SuggestionGuard } from "./suggestion.guard";

import { ActiveGuildGuard } from "api/common/active-guild.guard";

@Injectable()
@UseGuards(ActiveGuildGuard, SuggestionGuard)
export class SuggestionEvent {
	@On({ event: "message" })
	public suggest(message: Message) {
		return suggest(message);
	}
}
