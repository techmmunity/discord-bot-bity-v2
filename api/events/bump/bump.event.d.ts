import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";
export declare class BumpEvent {
    private readonly bumpRepository;
    constructor(bumpRepository: BumpRepository);
    sucess(message: Message): Promise<any[] | undefined>;
}
