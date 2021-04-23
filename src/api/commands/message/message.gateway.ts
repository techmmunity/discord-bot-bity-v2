import { Injectable } from "@nestjs/common";
import { DevGuard } from "common/dev.guard";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { emoji } from "./service/emoji";

@Injectable()
@UseGuards(DevGuard)
export class MessageGateway {
	@OnCommand({ name: "emoji" })
	public async emoji(message: Message) {
		return emoji(message);
	}
}
