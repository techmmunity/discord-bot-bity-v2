import { Invite, MessageEmbed } from "discord.js";
interface GetEmbedParams {
    invite: Invite;
    color: string;
    title: string;
}
export declare const getEmbed: ({ invite, title, color }: GetEmbedParams) => MessageEmbed;
export {};
