import { Client } from "discord.js";
interface BanParams {
    client: Client;
    guildId: string;
    userId: string;
}
export declare const ban: ({ guildId, userId, client }: BanParams) => Promise<void>;
export {};
