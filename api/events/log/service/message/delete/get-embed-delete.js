"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmbedDelete = exports.getIsBot = void 0;
const discord_js_1 = require("discord.js");
const message_1 = require("../../../../../../utils/message");
const getIsBot = (message) => message.author.bot ? "Yes" : "No";
exports.getIsBot = getIsBot;
const getEmbedDelete = ({ message, title, color, }) => {
    const messageContent = [
        "**User ID**: {userId}",
        "**User Tag**: {userTag}",
        "**Nickname**: {userNickname}",
        `**Channel**: <#${message.channel.id}>`,
    ].join("\n");
    const formmatedMessage = message_1.MessageUtil.formatMessage(message, messageContent);
    const messageToSend = formmatedMessage + "\n**Message**:\n" + message.content;
    const embed = new discord_js_1.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(messageToSend)
        .setThumbnail(message.author.avatarURL({ dynamic: true }));
    return embed;
};
exports.getEmbedDelete = getEmbedDelete;
//# sourceMappingURL=get-embed-delete.js.map