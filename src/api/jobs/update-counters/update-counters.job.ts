import { Injectable } from "@nestjs/common";
import { Once, ClientProvider, Client } from "discord-nestjs";
import * as cron from "node-cron";

import { updateCounters } from "./service";

import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { GuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";

export type RolesIds = Array<string>;

@Injectable()
export class UpdateCountersJob {
	@Client()
	public discordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		const guilds = getActiveGuilds();

		guilds.forEach(guildId => {
			cron.schedule(JOBS_SCHEDULE.UPDATE_COUNTERS, this.setJob(guildId));
		});
	}

	private setJob(guildId: GuildEnum) {
		return async () =>
			Promise.all(await updateCounters(this.discordClient, guildId));
	}
}
