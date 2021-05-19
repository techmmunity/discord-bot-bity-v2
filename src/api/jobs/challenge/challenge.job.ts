import { Injectable } from "@nestjs/common";
import { ClientProvider, Client, Once } from "discord-nestjs";
import { TextChannel } from "discord.js";
import * as cron from "node-cron";

import { makeEmbed } from "api/commands/moderation/service/get-challenge/helpers/make-embed";

import { JobsSchedule } from "config/jobs-schedule";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

import { Challenges } from "config/challenges";

const { NODE_ENV } = process.env;

@Injectable()
export class ChallengeJob {
	@Client()
	public DiscordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JobsSchedule.CHALLENGE, () =>
			this.setup(GuildEnum.PROGRAMMING),
		);
	}

	public getChallenge() {
		const randomIndex = Math.floor(Math.random() * Challenges.length);

		return Challenges[randomIndex];
	}

	public async getChannel(guildId: GuildEnum) {
		const client = this.DiscordClient.getClient();

		const guild = await client.guilds.fetch(guildId);

		if (NODE_ENV === "production") {
			return guild.channels.cache.get(
				ChannelEnum[guildId].CHALLENGES,
			) as TextChannel;
		}

		return guild.channels.cache.get(ChannelEnum[guildId].TESTS) as TextChannel;
	}

	public async setup(guildId: GuildEnum) {
		const challenge = this.getChallenge();

		const embed = makeEmbed(challenge);

		const channel = await this.getChannel(guildId);

		const message = await channel.send({
			content: `<@&${RolesEnum[guildId].CHALLENGES}>`,
			embed,
		});

		if (NODE_ENV === "production") {
			await message.crosspost();
		}
	}
}
