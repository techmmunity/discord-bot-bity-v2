import { GuildMember, Message } from "discord.js";
interface SendSuccessEmbedParams {
    message: Message;
    member: GuildMember;
    userBumpsTotal: number;
}
export declare const sendSuccessEmbed: ({ member, message, userBumpsTotal, }: SendSuccessEmbedParams) => Promise<Message>;
export {};
