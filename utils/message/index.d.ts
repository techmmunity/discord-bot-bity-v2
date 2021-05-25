/// <reference types="discord.js" />
import { Flags } from "./get-flags";
export declare const MessageUtil: {
    getArgs: (message: import("discord.js").Message) => string[];
    getFlags: (message: import("discord.js").Message) => Flags;
    getFlagsUnformatted: (message: import("discord.js").Message) => RegExpMatchArray;
    sendAndDelete: (message: import("discord.js").Message, messageToSend: string | import("discord.js").MessageEmbed, secondsToWait?: number) => Promise<void>;
    formatMessage: (message: import("discord.js").Message | import("discord.js").PartialMessage, text: string) => string;
};
export { Flags };
