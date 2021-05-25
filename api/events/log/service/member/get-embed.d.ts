import { GuildMember, MessageEmbed } from "discord.js";
interface GetEmbedParams {
    member: GuildMember;
    color: string;
    title: string;
}
export declare const getIsBot: (member: GuildMember) => "Yes" | "No";
export declare const getEmbed: ({ member, title, color }: GetEmbedParams) => MessageEmbed;
export {};
