import { Guild, VoiceChannel } from "discord.js";
import { RolesIds, CounterConfig } from "../types";
export declare const getChannel: (guild: Guild, counter: CounterConfig) => VoiceChannel;
export declare const getPromisesToUpdateGuildCounters: (guild: Guild, rolesIdsByMember: Array<RolesIds>, countersConfig: Array<CounterConfig>) => (Promise<VoiceChannel> | null)[];
