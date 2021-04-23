import { Injectable } from "@nestjs/common";
import { Once, ClientProvider, Client } from "discord-nestjs";
import * as cron from "node-cron";

import { setStatus } from "./service";

import { JobsSchedule } from "config/jobs-schedule";

@Injectable()
export class BotStatusJob {
	@Client()
	public DiscordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JobsSchedule.SET_BOT_STATUS, setStatus(this.DiscordClient));
	}
}
