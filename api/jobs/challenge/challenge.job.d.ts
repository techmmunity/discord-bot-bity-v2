import { ClientProvider } from "discord-nestjs";
import { TextChannel } from "discord.js";
import { GuildEnum } from "enums/guilds";
export declare class ChallengeJob {
    discordClient: ClientProvider;
    setCron(): void;
    getChallenge(): import("../../../types/challenge").Challenge;
    getChannel(guildId: GuildEnum): Promise<TextChannel>;
    setup(guildId: GuildEnum): Promise<void>;
}
