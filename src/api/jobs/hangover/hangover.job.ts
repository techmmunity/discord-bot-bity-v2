import { Injectable } from "@nestjs/common";
import { ClientProvider, Client, Once } from "discord-nestjs";
import * as cron from "node-cron";

import { createChannel } from "./service/create-channel";
import { deleteChannel } from "./service/delete-channel";
import { getClearHangoverSchedule } from "./service/helpers/get-clear-hangover-schedule";
import { getHangoverScheduleByGuild } from "./service/helpers/get-hangover-schedule-by-guild";
import { getCategoryName, getChannelName } from "./service/helpers/get-name";
import { sendMessage } from "./service/send-message";

import { GuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";
import { HANGOVER } from "config/hangover";

interface HangoverParams {
	discordClient: ClientProvider;
	guildId: GuildEnum;
	categoryName: string;
	channelName: string;
}

@Injectable()
export class HangoverJob {
	@Client()
	public discordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		const guilds = getActiveGuilds();

		guilds.forEach(guildId => this.set(guildId));
	}

	private set(guildId: GuildEnum) {
		const hangoverShedule = getHangoverScheduleByGuild(guildId);
		const clearHangoutSchedule = getClearHangoverSchedule(guildId);

		const categoryName = getCategoryName(HANGOVER.day[guildId]);
		const channelName = getChannelName(HANGOVER.day[guildId]);

		const params: HangoverParams = {
			discordClient: this.discordClient,
			guildId,
			categoryName,
			channelName,
		};

		cron.schedule(hangoverShedule, () => this.setup(params));

		cron.schedule(clearHangoutSchedule, deleteChannel(params));
	}

	private async setup(params: HangoverParams) {
		const channel = await createChannel(params);

		await sendMessage({
			...params,
			hangoverChannel: channel,
		});
	}
}
