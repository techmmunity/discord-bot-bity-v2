"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessEmbed = void 0;
const discord_js_1 = require("discord.js");
const member_1 = require("../../../../../../utils/member");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const sendSuccessEmbed = ({ member, message, userBumpsTotal, }) => {
    const description = member_1.memberUtil.formatMessage(member, "Thanks for bump the server {userMention} ({userTag})!");
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Thanks!")
        .setColor(colors_1.COLORS.turquoise)
        .setThumbnail(images_1.IMAGES.treasure)
        .setDescription(description)
        .addFields([
        {
            name: "Bytes reward:",
            value: "0",
            inline: true,
        },
        {
            name: "Card progress:",
            value: `${userBumpsTotal} / 100`,
            inline: true,
        },
    ]);
    return message.channel.send(embed);
};
exports.sendSuccessEmbed = sendSuccessEmbed;
//# sourceMappingURL=send-sucess-embed.js.map