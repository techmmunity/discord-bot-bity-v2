"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEndEmbed = void 0;
const discord_js_1 = require("discord.js");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const sendEndEmbed = ({ message, emojisCreatedQtd, }) => {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(colors_1.COLORS.green)
        .setTitle("Done!")
        .setDescription("All done!")
        .addFields([
        {
            name: "Emojis Created:",
            value: emojisCreatedQtd,
            inline: true,
        },
    ])
        .setThumbnail(images_1.IMAGES.bityGif);
    return message.channel.send(embed);
};
exports.sendEndEmbed = sendEndEmbed;
//# sourceMappingURL=send-end-embed.js.map