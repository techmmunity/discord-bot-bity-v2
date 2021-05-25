import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { On, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";
import { BumpEntity, BumpRepository } from "entities/bump.entity";

import { BumpGuard } from "./bump.guard";
import { success } from "./service/sucess";

import { ActiveGuildGuard } from "api/common/active-guild.guard";

@Injectable()
@UseGuards(ActiveGuildGuard, BumpGuard)
export class BumpEvent {
	public constructor(
		@InjectRepository(BumpEntity)
		private readonly BumpRepository: BumpRepository,
	) {}

	@On({ event: "message" })
	public sucess(message: Message) {
		return success(this.BumpRepository, message);
	}
}
