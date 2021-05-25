import { Message } from "discord.js";
export declare const getChannelQtdByType: (message: Message) => {
    text: number;
    voice: number;
    news: number;
    category: number;
    store: number;
};
