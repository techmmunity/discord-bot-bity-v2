import { Injectable } from "@nestjs/common";
import { Once, UseGuards } from "discord-nestjs";

import { ready } from "./service/ready";

import { DevGuard } from "common/dev.guard";

@Injectable()
@UseGuards(DevGuard)
export class SystemGateway {
	@Once({ event: "ready" })
	public async ready() {
		return ready();
	}
}
