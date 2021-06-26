import { MessageEmbed } from "discord.js";
import { ChallengesEntity } from "entities/challenge.entity";
import { GuildEnum } from "enums/guilds";
export declare const makeEmbed: (challenge: ChallengesEntity, guildId: GuildEnum) => MessageEmbed;
