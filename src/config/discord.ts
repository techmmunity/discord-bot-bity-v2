import { DiscordModuleOption } from "discord-nestjs";

import { getActiveGuilds } from "./active-guilds";

import { SpecialGuildEnum } from "enums/guilds";

import { Config } from "config";

const { DISCORD_TOKEN } = process.env;

export const DiscordConfig: DiscordModuleOption = {
	token: DISCORD_TOKEN,
	commandPrefix: Config.prefix,
	allowGuilds: [...getActiveGuilds(), SpecialGuildEnum.STAFF],
};
