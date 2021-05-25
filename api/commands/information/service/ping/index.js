"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const discord_js_1 = require("discord.js");
const colors_1 = require("../../../../../assets/colors");
const images_1 = require("../../../../../assets/images");
const ping = async (message) => {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Pong!")
        .setColor(colors_1.Colors.blue)
        .setThumbnail(images_1.Images.lattency)
        .addField("Bot Latency", `${Date.now() - message.createdTimestamp}ms`);
    await message.channel.send(embed);
};
exports.ping = ping;
//# sourceMappingURL=index.js.map