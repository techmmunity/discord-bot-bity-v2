import { Injectable } from "@nestjs/common";
import { DevGuard } from "common/dev.guard";
import { Once, UseGuards } from "discord-nestjs";

import { ready } from "./service/ready";

@Injectable()
@UseGuards(DevGuard)
export class SystemGateway {
	@Once({ event: "ready" })
	public async ready() {
		return ready();
	}
}
