import { DiscordModuleOption } from "discord-nestjs";

import { getActiveGuilds } from "./active-guilds";

import { Config } from "config";

const { DISCORD_TOKEN, NODE_ENV } = process.env;

export const DiscordConfig: DiscordModuleOption = {
	token: DISCORD_TOKEN,
	commandPrefix: NODE_ENV === "production" ? Config.prfixPrd : Config.prfixDev,
	allowGuilds: getActiveGuilds(),
};
