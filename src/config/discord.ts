import { DiscordModuleOption } from "discord-nestjs";

import { GuildsEnum } from "enums/guilds";

import { Config } from "config";

const { DISCORD_TOKEN, NODE_ENV } = process.env;

const getAllowedGuilds = () => Object.values(GuildsEnum).filter(Boolean);

export const DiscordConfig: DiscordModuleOption = {
	token: DISCORD_TOKEN,
	commandPrefix: NODE_ENV === "production" ? Config.prfixPrd : Config.prfixDev,
	allowGuilds: getAllowedGuilds(),
};
