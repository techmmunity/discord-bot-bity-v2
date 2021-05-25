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
const getEmbedColor = () => (isProduction ? colors_1.Colors.turquoise : colors_1.Colors.red);
const getEmbedImage = (user) => isProduction ? images_1.Images.bityGif : user.avatarURL();
const sendEmbed = (message) => {
    const user = message.author;
    const embed = new discord_js_1.MessageEmbed()
        .setColor(getEmbedColor())
        .setTitle(`Hello, I'm ${user.username}!`)
        .setDescription(`My prefix is: \`${config_1.Config.prefix}\``)
        .setThumbnail(getEmbedImage(user));
    return message_1.MessageUtil.sendAndDelete(message, embed, 2.5);
};
exports.sendEmbed = sendEmbed;
//# sourceMappingURL=send-embed.js.map