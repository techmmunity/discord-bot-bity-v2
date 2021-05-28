import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientProvider, Client, Once } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";
import { BumpEntity, BumpRepository } from "entities/bump.entity";
import * as cron from "node-cron";

import { JobsSchedule } from "config/jobs-schedule";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";

@Injectable()
export class BumpRushJob {
	public constructor(
		@InjectRepository(BumpEntity)
		private readonly BumpRepository: BumpRepository,
	) {}

	@Client()
	public DiscordClient: ClientProvider;

	@Once({ event: "ready" })
	public setCron() {
		cron.schedule(JobsSchedule.BUMP_RANK, () =>
			this.setup(GuildEnum.PROGRAMMING),
		);
	}

	public async getChannel(guildId: GuildEnum) {
		const guild = await this.DiscordClient.getClient().guilds.fetch(guildId);

		if (!guild) return;

		const channelId = ChannelEnum[guildId].BUMP_RUSH;

		const channel = guild.channels.cache.get(channelId);

		return channel as TextChannel | undefined;
	}

	public formatBumps(bumps: Array<BumpEntity>) {
		const ranks = bumps.map(({ bumps, discordUserId }, index) => {
			const rank = String(index + 1).padStart(2, "0");

			// #01 | @Jose123 --- 10
			return `**#${rank} |** <@${discordUserId}> --- **${bumps}**`;
		});

		return new MessageEmbed()
			.setTitle("Bump Rush Rank!")
			.setColor(Colors.turquoise)
			.setDescription(ranks.join("\n"));
	}

	public async setup(guildId: GuildEnum) {
		const channel = await this.getChannel(guildId);

		if (!channel) return;

		const bumps = await this.BumpRepository.find({
			order: {
				bumps: "DESC",
			},
			take: 10,
		});

		const bumpsFormatted = this.formatBumps(bumps);

		await channel.send(bumpsFormatted);
	}
}
