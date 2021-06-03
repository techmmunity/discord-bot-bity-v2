import { Injectable, Logger } from "@nestjs/common";
import { Once } from "discord-nestjs";

import { ready } from "./service/ready";

@Injectable()
export class SystemEvent {
	private readonly logger = new Logger("System");

	@Once({ event: "ready" })
	public ready() {
		return ready(this.logger);
	}
}
