import { Injectable } from "@nestjs/common";
import { ClientProvider, Client, Once } from "discord-nestjs";
import * as cron from "node-cron";

import { sendReminder } from "./service";

import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { getActiveGuilds } from "config/active-guilds";

@Injectable()
export class ReviewReminderJob {
	@Client()
	public discordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JOBS_SCHEDULE.REVIEW_REMINDER, this.sendReminder);
	}

	public sendReminder() {
		const guilds = getActiveGuilds();

		return Promise.all(
			guilds.map(guildId => sendReminder(this.discordClient, guildId)),
		);
	}
}
