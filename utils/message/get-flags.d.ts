import { Message } from "discord.js";
export interface Flags {
    [flag: string]: string | boolean;
}
export declare const getFlagsUnformatted: (message: Message) => RegExpMatchArray;
export declare const getFlags: (message: Message) => Flags;
