import { Message, VoiceChannel } from "discord.js";

import { MarkdownUtil } from "utils/markdown";

import { ChannelsPatterns } from "config/channels-patterns";

const getVoiceChannels = (message: Message) =>
	message.guild?.channels.cache
		.array()
		?.filter(channel => channel.type === "voice") as Array<VoiceChannel>;

const getCountersChannels = (channels: Array<VoiceChannel>) =>
	channels?.filter(voiceChannel =>
		voiceChannel.name.match(ChannelsPatterns.counters.name),
	);

const formatCounters = (channels: Array<VoiceChannel>) =>
	channels
		.map(counter => {
			const name = counter.name.split(" ").shift() as string;

			return `${name.padEnd(15, " ")}${counter.id}`;
		})
		.join("\n");

export const counters = async (message: Message) => {
	const voiceChannels = getVoiceChannels(message);

	const counterChannels = getCountersChannels(voiceChannels);

	const countersFormatted = formatCounters(counterChannels);

	await message.channel.send(MarkdownUtil.codeBlock(countersFormatted));
};
