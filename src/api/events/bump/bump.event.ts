import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { BumpGuard } from "./bump.guard";
import { success } from "./service/sucess";

@Injectable()
@UseGuards(BumpGuard)
export class BumpEvent {
	@Client()
	public DiscordClient: ClientProvider;

	@On({ event: "message" })
	public sucess(message: Message) {
		return success(message);
	}
}
