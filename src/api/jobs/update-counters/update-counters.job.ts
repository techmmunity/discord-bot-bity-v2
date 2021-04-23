import { Injectable } from "@nestjs/common";
import { Once, ClientProvider, Client } from "discord-nestjs";
import * as cron from "node-cron";

import { updateCounters } from "./service";

import { JobsSchedule } from "config/jobs-schedule";

import { getActiveGuilds } from "config/active-guilds";

export type RolesIds = Array<string>;

@Injectable()
export class UpdateCountersJob {
	@Client()
	public DiscordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JobsSchedule.UPDATE_COUNTERS, this.setJobForActiveGuilds);
	}

	private setJobForActiveGuilds() {
		const guilds = getActiveGuilds();

		return () =>
			Promise.all(
				guilds.map(guildId => updateCounters(this.DiscordClient, guildId)),
			);
	}
}
