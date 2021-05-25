"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDoesntHasRoleEmbed = void 0;
const discord_js_1 = require("discord.js");
const markdown_1 = require("../../../../../../utils/markdown");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const sendDoesntHasRoleEmbed = ({ message, }) => {
    const roleName = markdown_1.MarkdownUtil.bold("Bump Rush");
    const channelName = markdown_1.MarkdownUtil.bold("🔓┊unlock-channels");
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Thanks, but you aren't one of our warriors")
        .setColor(colors_1.Colors.red)
        .setImage(images_1.Images.noWayJose)
        .setDescription(`You need have the ${roleName} role to get rewards for the bump.\n Unlock it on ${channelName} channel.`);
    return message.channel.send(embed);
};
exports.sendDoesntHasRoleEmbed = sendDoesntHasRoleEmbed;
//# sourceMappingURL=send-doest-have-role-embed.js.map