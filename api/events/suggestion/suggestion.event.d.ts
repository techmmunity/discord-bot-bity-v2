import { Message } from "discord.js";
export declare class SuggestionEvent {
    suggest(message: Message): Promise<[import("discord.js").MessageReaction, import("discord.js").MessageReaction]>;
}
