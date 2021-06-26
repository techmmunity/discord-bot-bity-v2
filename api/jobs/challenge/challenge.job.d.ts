import { ClientProvider } from "discord-nestjs";
import { Message, TextChannel } from "discord.js";
import { ChallengesEntity, ChallengesRepository } from "entities/challenge.entity";
import { GuildEnum } from "enums/guilds";
export declare class ChallengeJob {
    readonly challengesRepository: ChallengesRepository;
    constructor(challengesRepository: ChallengesRepository);
    discordClient: ClientProvider;
    setCron(): void;
    getChallenge(message?: Message): Promise<Message | ChallengesEntity>;
    getChannel(guildId: GuildEnum): Promise<TextChannel>;
    sendChallenge(guildId: GuildEnum): Promise<void>;
    private set;
}
