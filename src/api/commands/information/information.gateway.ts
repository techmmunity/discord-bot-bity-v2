import { Injectable } from "@nestjs/common";
import { OnCommand, UseGuards } from "discord-nestjs";
import { Message } from "discord.js";

import { counters } from "./service/counters";
import { ping } from "./service/ping";
import { qtd } from "./service/qtd";
import { ram } from "./service/ram";

import { DevGuard } from "api/common/dev.guard";
import { TechTeamGuard } from "api/common/tech-team.guard";

@Injectable()
@UseGuards(DevGuard)
export class InformationGateway {
	@OnCommand({ name: "counters" })
	@UseGuards(TechTeamGuard)
	public counters(message: Message) {
		return counters(message);
	}

	@OnCommand({ name: "ping" })
	public ping(message: Message) {
		return ping(message);
	}

	@OnCommand({ name: "qtd" })
	public qtd(message: Message) {
		return qtd(message);
	}

	@OnCommand({ name: "ram" })
	public ram(message: Message) {
		return ram(message);
	}
}
