import { ClientProvider } from "discord-nestjs";
import { GuildMember } from "discord.js";
interface MemberParams {
    DiscordClient: ClientProvider;
    member: GuildMember;
    title: string;
    color: string;
}
export declare const member: ({ DiscordClient, member, title, color, }: MemberParams) => Promise<import("discord.js").Message>;
export {};
