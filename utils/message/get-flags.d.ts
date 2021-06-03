import { Message } from "discord.js";
export declare const getFlagsUnformatted: (message: Message) => RegExpMatchArray;
export declare const getFlags: (message: Message) => Flags;
export declare type Flags = Record<string, boolean | string>;
