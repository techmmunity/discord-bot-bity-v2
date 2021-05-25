import { Message } from "discord.js";
export declare class MentionEvent {
    bot(message: Message): Promise<void> | undefined;
}
