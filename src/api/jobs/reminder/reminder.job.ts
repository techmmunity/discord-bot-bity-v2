import { Injectable } from "@nestjs/common";
import { ClientProvider, Client, Once } from "discord-nestjs";
import * as cron from "node-cron";

import { sendReviewReminder } from "./review";
import { sendSocioReminder } from "./socio";

import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { getActiveGuilds } from "config/active-guilds";

@Injectable()
export class ReminderJob {
	@Client()
	public discordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JOBS_SCHEDULE.REVIEW_REMINDER, this.sendReviewReminder);

		cron.schedule(JOBS_SCHEDULE.SOCIO_REMINDER, this.sendSocioReminder);
	}

	public sendReviewReminder() {
		const guilds = getActiveGuilds();

		return Promise.all(
			guilds.map(guildId => sendReviewReminder(this.discordClient, guildId)),
		);
	}

	public sendSocioReminder() {
		const guilds = getActiveGuilds();

		return Promise.all(
			guilds.map(guildId => sendSocioReminder(this.discordClient, guildId)),
		);
	}
}
