"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmbedEdit = exports.getIsBot = void 0;
const discord_js_1 = require("discord.js");
const message_1 = require("../../../../../../utils/message");
const getIsBot = (message) => message.author.bot ? "Yes" : "No";
exports.getIsBot = getIsBot;
const getEmbedEdit = ({ oldMessage, newMessage, title, color, }) => {
    const messageContent = [
        "**User ID**: {userId}",
        "**User Tag**: {userTag}",
        "**Nickname**: {userNickname}",
        `**Channel**: <#${newMessage.channel.id}>`,
    ].join("\n");
    const formmatedMessage = message_1.messageUtil.formatMessage(newMessage, messageContent);
    const oldMessageToSend = `\n**Old Message**:\n${oldMessage.content}`;
    const newMessageToSend = `\n\n**New Message**:\n${newMessage.content}`;
    const messageToSend = formmatedMessage + oldMessageToSend + newMessageToSend;
    const embed = new discord_js_1.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(messageToSend)
        .setThumbnail(newMessage.author.avatarURL({ dynamic: true }));
    return embed;
};
exports.getEmbedEdit = getEmbedEdit;
//# sourceMappingURL=get-embed-edit.js.map