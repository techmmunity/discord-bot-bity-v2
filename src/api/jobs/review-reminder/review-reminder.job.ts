import { Injectable } from "@nestjs/common";
import { ClientProvider, Client, Once } from "discord-nestjs";
import * as cron from "node-cron";

import { sendReminder } from "./service";

import { JobsSchedule } from "config/jobs-schedule";

import { getActiveGuilds } from "config/active-guilds";

@Injectable()
export class ReviewReminderJob {
	@Client()
	public DiscordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JobsSchedule.REVIEW_REMINDER, this.sendReminder);
	}

	public sendReminder() {
		const guilds = getActiveGuilds();

		return () =>
			Promise.all(
				guilds.map(guildId => sendReminder(this.DiscordClient, guildId)),
			);
	}
}
