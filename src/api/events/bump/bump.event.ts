import { Injectable, UseGuards } from "@nestjs/common";
import { On } from "discord-nestjs";
import { Message } from "discord.js";

import { BumpGuard } from "./bump.guard";
// import { success } from "./service/sucess";

// import { ActiveGuildGuard } from "api/common/active-guild.guard";

@Injectable()
@UseGuards(BumpGuard)
export class BumpEvent {
	@On({ event: "message" })
	public sucess(_: Message) {
		// return success(message);
	}
}
