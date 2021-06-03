import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";
export declare const success: (bumpRepository: BumpRepository, message: Message) => Promise<any[] | undefined>;
