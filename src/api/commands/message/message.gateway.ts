import { Injectable } from "@nestjs/common";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { emoji } from "./service/emoji";

import { DevGuard } from "api/common/dev.guard";

@Injectable()
@UseGuards(DevGuard)
export class MessageGateway {
	@OnCommand({ name: "emoji" })
	public emoji(message: Message) {
		return emoji(message);
	}
}
