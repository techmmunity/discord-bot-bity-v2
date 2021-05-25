import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";
export declare const success: (BumpRepository: BumpRepository, message: Message) => Promise<any[] | undefined>;
