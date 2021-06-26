import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
export declare const sendReviewReminder: (discordClient: ClientProvider, guildId: GuildEnum) => Promise<void>;
