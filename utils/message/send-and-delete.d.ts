import { Message, MessageEmbed } from "discord.js";
export declare const sendAndDelete: (message: Message, messageToSend: MessageEmbed | string, secondsToWait?: number) => Promise<void>;
