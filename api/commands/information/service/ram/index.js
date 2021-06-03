"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ram = void 0;
const discord_js_1 = require("discord.js");
const colors_1 = require("../../../../../assets/colors");
const images_1 = require("../../../../../assets/images");
const calcMemory = (memory) => Math.round((memory / 1024 / 1024) * 100) / 100;
const getColor = (memoryUsage) => {
    if (memoryUsage < 30)
        return colors_1.COLORS.green;
    if (memoryUsage < 50)
        return colors_1.COLORS.yellow;
    return colors_1.COLORS.red;
};
const ram = async (message) => {
    const memoryUsage = process.memoryUsage();
    const rss = calcMemory(memoryUsage.rss);
    const heapTotal = calcMemory(memoryUsage.heapTotal);
    const heapUsed = calcMemory(memoryUsage.heapUsed);
    const external = calcMemory(memoryUsage.external);
    const total = calcMemory(memoryUsage.heapTotal + memoryUsage.external);
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("I use about:")
        .setColor(getColor(heapTotal))
        .setThumbnail(images_1.IMAGES.performance)
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
exports.ram = ram;
//# sourceMappingURL=index.js.map