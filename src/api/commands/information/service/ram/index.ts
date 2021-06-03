import { Message, MessageEmbed } from "discord.js";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

const calcMemory = (memory: number) =>
	Math.round((memory / 1024 / 1024) * 100) / 100;

const getColor = (memoryUsage: number) => {
	if (memoryUsage < 30) return COLORS.green;

	if (memoryUsage < 50) return COLORS.yellow;

	return COLORS.red;
};

export const ram = async (message: Message) => {
	const memoryUsage = process.memoryUsage();

	const rss = calcMemory(memoryUsage.rss);
	const heapTotal = calcMemory(memoryUsage.heapTotal);
	const heapUsed = calcMemory(memoryUsage.heapUsed);
	const external = calcMemory(memoryUsage.external);
	const total = calcMemory(memoryUsage.heapTotal + memoryUsage.external);

	const embed = new MessageEmbed()
		.setTitle("I use about:")
		.setColor(getColor(heapTotal))
		.setThumbnail(IMAGES.performance)
		.addFields([
			{
				name: "RSS",
				value: `${rss} MB`,
				inline: true,
			},
			{
				name: "Heap Total",
				value: `${heapTotal} MB`,
				inline: true,
			},
			{
				name: "Heap Used",
				value: `${heapUsed} MB`,
				inline: true,
			},
			{
				name: "External",
				value: `${external} MB`,
				inline: true,
			},
			{
				name: "Total",
				value: `${total} MB`,
				inline: true,
			},
		]);

	await message.channel.send(embed);
};
