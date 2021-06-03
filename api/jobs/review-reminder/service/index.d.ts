import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
export declare const sendReminder: (discordClient: ClientProvider, guildId: GuildEnum) => Promise<void>;
