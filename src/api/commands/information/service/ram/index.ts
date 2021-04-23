import { Message, MessageEmbed } from "discord.js";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

const calcMemory = (memory: number) =>
	Math.round((memory / 1024 / 1024) * 100) / 100;

const getColor = (memoryUsage: number) => {
	if (memoryUsage < 30) return Colors.green;

	if (memoryUsage < 50) return Colors.yellow;

	return Colors.red;
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
		.setThumbnail(Images.performance)
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
