import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";
export declare const incrementBumps: (BumpRepository: BumpRepository, message: Message) => Promise<number>;
