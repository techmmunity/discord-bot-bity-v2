import { ClientProvider } from "discord-nestjs";
import { Invite } from "discord.js";
interface InviteParams {
    discordClient: ClientProvider;
    invite: Invite;
    title: string;
    color: string;
}
export declare const inviteLog: ({ discordClient, invite, title, color, }: InviteParams) => Promise<import("discord.js").Message>;
export {};
