import { MessageEmbed } from "discord.js";

import { Urls } from "config/url";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

import { Challenge } from "types/challenge";

export const makeEmbed = (challenge: Challenge) =>
	new MessageEmbed()
		.setTitle(challenge.title)
		.setColor(Colors.turquoise)
		.setDescription(challenge.description)
		.setAuthor(
			"Techmmunity",
			Images.techmmunityLogo,
			Urls.LANDING_PAGE_COMPLETE,
		)
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
