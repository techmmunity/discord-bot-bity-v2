"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendStartEmbed = void 0;
const discord_js_1 = require("discord.js");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const sendStartEmbed = async (message) => {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(colors_1.COLORS.turquoise)
        .setTitle("Please, wait!")
        .setDescription("I still processing this command, please, wait a little bit.")
        .setThumbnail(images_1.IMAGES.bityGif);
    await message.channel.send(embed);
};
exports.sendStartEmbed = sendStartEmbed;
//# sourceMappingURL=send-start-embed.js.map