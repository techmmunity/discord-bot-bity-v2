import { Guild } from "discord.js";

import { GuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";

export const notShouldCollectLogs = (guild: Guild | null) =>
	!getActiveGuilds().includes(guild?.id as GuildEnum);
