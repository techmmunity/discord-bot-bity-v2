import { Message, MessageEmbed } from "discord.js";
export declare const sendAndDelete: (message: Message, messageToSend: string | MessageEmbed, secondsToWait?: number) => Promise<void>;
