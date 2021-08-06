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
		this.sendReviewReminder();

		this.sendSocioReminder();
	}

	public sendReviewReminder() {
		const guilds = getActiveGuilds();

		guilds.forEach(guildId =>
			cron.schedule(JOBS_SCHEDULE.REVIEW_REMINDER, () =>
				sendReviewReminder(this.discordClient, guildId),
			),
		);
	}

	public sendSocioReminder() {
		const guilds = getActiveGuilds();

		guilds.forEach(guildId =>
			cron.schedule(JOBS_SCHEDULE.REVIEW_REMINDER, () =>
				sendSocioReminder(this.discordClient, guildId),
			),
		);
	}
}
