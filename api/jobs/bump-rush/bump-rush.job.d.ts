import { ClientProvider } from "discord-nestjs";
import { MessageEmbed, TextChannel } from "discord.js";
import { BumpEntity, BumpRepository } from "entities/bump.entity";
import { GuildEnum } from "enums/guilds";
export declare class BumpRushJob {
    private readonly BumpRepository;
    constructor(BumpRepository: BumpRepository);
    DiscordClient: ClientProvider;
    setCron(): void;
    getChannel(guildId: GuildEnum): Promise<TextChannel | undefined>;
    formatBumps(bumps: Array<BumpEntity>): MessageEmbed;
    setup(guildId: GuildEnum): Promise<void>;
}
