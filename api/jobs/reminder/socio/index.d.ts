import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
export declare const sendSocioReminder: (discordClient: ClientProvider, guildId: GuildEnum) => Promise<void>;
