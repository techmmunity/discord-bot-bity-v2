"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDoesntHasRoleEmbed = void 0;
const discord_js_1 = require("discord.js");
const markdown_1 = require("../../../../../../utils/markdown");
const channels_1 = require("../../../../../../enums/channels");
const guilds_1 = require("../../../../../../enums/guilds");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const sendDoesntHasRoleEmbed = ({ message, }) => {
    var _a;
    const roleName = markdown_1.markdownUtil.bold("Bump Rush");
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Thanks, but you aren't one of our warriors")
        .setColor(colors_1.COLORS.red)
        .setImage(images_1.IMAGES.noWayJose)
        .setDescription(`You need have the ${roleName} role to get rewards for the bump.\n Unlock it on <#${channels_1.ChannelEnum[(_a = message.guild) === null || _a === void 0 ? void 0 : _a.id].UNLOCK_CHANNELS}> channel.`);
    return message.channel.send(embed);
};
exports.sendDoesntHasRoleEmbed = sendDoesntHasRoleEmbed;
//# sourceMappingURL=send-doest-have-role-embed.js.map