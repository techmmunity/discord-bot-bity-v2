import { ClientProvider } from "discord-nestjs";
import { Invite } from "discord.js";
interface InviteParams {
    DiscordClient: ClientProvider;
    invite: Invite;
    title: string;
    color: string;
}
export declare const invite: ({ DiscordClient, invite, title, color, }: InviteParams) => Promise<import("discord.js").Message>;
export {};
