import { MessageEmbed } from "discord.js";
import { ChallengesEntity } from "entities/challenge.entity";

import { GuildEnum } from "enums/guilds";

import { URLS } from "config/url";

import { getMainColor } from "assets/colors";
import { IMAGES } from "assets/images";

export const makeEmbed = (challenge: ChallengesEntity, guildId: GuildEnum) => {
	const embed = new MessageEmbed()
		.setTitle(challenge.title)
		.setColor(getMainColor(guildId))
		.setDescription(challenge.description)
		.setAuthor("Techmmunity", IMAGES.techmmunityLogo, URLS.SITE_COMPLETE)
		.addFields([
			{
				name: "Como funcionam os desafios?",
				value: "Veja a mensagem pinada nesse canal :wink:",
			},
			{
				name: "Linguagem",
				value: challenge.language,
				inline: true,
			},
			{
				name: "Nivel",
				value: challenge.level,
				inline: true,
			},
			{
				name: "ID",
				value: challenge.id,
				inline: true,
			},
		]);

	if (challenge.image) {
		embed.setImage(challenge.image);
	}

	return embed;
};
