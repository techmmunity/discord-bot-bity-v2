"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmbed = void 0;
const discord_js_1 = require("discord.js");
const message_1 = require("../../../../../../utils/message");
const config_1 = require("../../../../../../config");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";
const getEmbedColor = () => (isProduction ? colors_1.COLORS.turquoise : colors_1.COLORS.red);
const getEmbedImage = (user) => isProduction ? images_1.IMAGES.bityGif : user.avatarURL();
const sendEmbed = (message) => {
    const user = message.author;
    const embed = new discord_js_1.MessageEmbed()
        .setColor(getEmbedColor())
        .setTitle(`Hello, I'm ${user.username}!`)
        .setDescription(`My prefix is: \`${config_1.CONFIG.prefix}\``)
        .setThumbnail(getEmbedImage(user));
    return message_1.messageUtil.sendAndDelete(message, embed, 2.5);
};
exports.sendEmbed = sendEmbed;
//# sourceMappingURL=send-embed.js.map