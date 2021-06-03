import { DiscordModuleOption } from "discord-nestjs";

import { getActiveGuilds } from "./active-guilds";
import { URLS } from "./url";

import { SpecialGuildEnum } from "enums/guilds";

import { CONFIG } from "config";

const { DISCORD_TOKEN } = process.env;

export const DISCORD_CONFIG: DiscordModuleOption = {
	token: DISCORD_TOKEN,
	commandPrefix: CONFIG.prefix,
	allowGuilds: [...getActiveGuilds(), SpecialGuildEnum.STAFF],
	presence: {
		activity: {
			name: URLS.LANDING_PAGE_SHORT,
			type: "PLAYING",
		},
	},
};
