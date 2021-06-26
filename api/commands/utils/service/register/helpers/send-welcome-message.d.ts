import { GuildMember, Message } from "discord.js";
import { GuildEnum } from "enums/guilds";
export declare const sendWelcomeMessage: (message: Message, member: GuildMember, guildId: GuildEnum) => Promise<Message>;
