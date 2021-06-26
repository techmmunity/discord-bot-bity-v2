import { Message } from "discord.js";
export declare class ModerationGateway {
    clear(message: Message): Promise<void>;
    register(message: Message): Promise<void>;
    setEmojis(message: Message): Promise<void>;
}
