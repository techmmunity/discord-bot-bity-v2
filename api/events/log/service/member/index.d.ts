import { ClientProvider } from "discord-nestjs";
import { GuildMember } from "discord.js";
interface MemberParams {
    discordClient: ClientProvider;
    memberData: GuildMember;
    title: string;
    color: string;
}
export declare const member: ({ discordClient, memberData, title, color, }: MemberParams) => Promise<import("discord.js").Message>;
export {};
