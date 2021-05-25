import { Message } from "discord.js";
export declare class InformationGateway {
    counters(message: Message): Promise<void>;
    ping(message: Message): Promise<void>;
    qtd(message: Message): Promise<void>;
    ram(message: Message): Promise<void>;
}
