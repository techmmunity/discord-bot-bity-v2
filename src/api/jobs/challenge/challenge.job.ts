import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientProvider, Client, Once, OnCommand } from "discord-nestjs";
import { Message, TextChannel } from "discord.js";
import {
	ChallengesEntity,
	ChallengesRepository,
} from "entities/challenge.entity";
import * as cron from "node-cron";

import { makeEmbed } from "./helpers/make-embed";

import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

import { getActiveGuilds } from "config/active-guilds";

const { NODE_ENV } = process.env;

@Injectable()
export class ChallengeJob {
	public constructor(
		@InjectRepository(ChallengesEntity)
		public readonly challengesRepository: ChallengesRepository,
	) {}

	@Client()
	public discordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		const guilds = getActiveGuilds();

		guilds.forEach(guildId => this.set(guildId));
	}

	@OnCommand({ name: "random-challenge" })
	public async getChallenge(message?: Message) {
		const challenge = await this.challengesRepository.findOne({
			order: {
				count: "ASC",
			},
		});

		if (message) {
			return message.channel.send(JSON.stringify(challenge));
		}

		return challenge as ChallengesEntity;
	}

	public async getChannel(guildId: GuildEnum) {
		const client = this.discordClient.getClient();

		const guild = await client.guilds.fetch(guildId);

		if (NODE_ENV === "production") {
			return guild.channels.cache.get(
				ChannelEnum[guildId].CHALLENGES,
			) as TextChannel;
		}

		return guild.channels.cache.get(ChannelEnum[guildId].TESTS) as TextChannel;
	}

	public async sendChallenge(guildId: GuildEnum) {
		const challenge = (await this.getChallenge()) as ChallengesEntity;

		const embed = makeEmbed(challenge, guildId);

		const channel = await this.getChannel(guildId);

		const message = await channel.send({
			content: `<@&${RolesEnum[guildId].CHALLENGES}>`,
			embed,
		});

		if (NODE_ENV === "production") {
			challenge.count++;

			await Promise.all([challenge.save(), message.crosspost()]);
		}
	}

	private set(guildId: GuildEnum) {
		let schedule;

		switch (guildId) {
			case GuildEnum.DEV:
				schedule = JOBS_SCHEDULE.CHALLENGE_DEV;
				break;
			case GuildEnum.GRAPHIC:
				schedule = JOBS_SCHEDULE.CHALLENGE_GRAPHIC;
				break;
			default:
				return;
		}

		cron.schedule(schedule, () => this.sendChallenge(guildId));
	}
}
