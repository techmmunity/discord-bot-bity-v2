import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
export declare const sendReminder: (DiscordClient: ClientProvider, guildId: GuildEnum) => Promise<void>;
