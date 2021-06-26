import { Injectable } from "@nestjs/common";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { register } from "./service/register";
import { suggest } from "./service/suggest";

import { DevGuard } from "api/common/dev.guard";

@Injectable()
@UseGuards(DevGuard)
export class UtilsGateway {
	@OnCommand({ name: "suggest" })
	public suggest(message: Message) {
		return suggest(message);
	}

	@OnCommand({ name: "register" })
	public register(message: Message) {
		return register(message);
	}
}
