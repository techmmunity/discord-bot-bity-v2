import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";
export declare class BumpEvent {
    private readonly BumpRepository;
    constructor(BumpRepository: BumpRepository);
    sucess(message: Message): Promise<any[] | undefined>;
}
