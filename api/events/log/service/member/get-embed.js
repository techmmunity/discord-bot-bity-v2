"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmbed = exports.getIsBot = void 0;
const discord_js_1 = require("discord.js");
const member_1 = require("../../../../../utils/member");
const getIsBot = (member) => member.user.bot ? "Yes" : "No";
exports.getIsBot = getIsBot;
const getEmbed = ({ member, title, color }) => {
    const isBot = exports.getIsBot(member);
    const message = [
        "**ID**: {userId}",
        "**Tag**: {userTag}",
        "**Name**: {userName}",
        "**Nickname**: {userNickname}",
        `**Bot**: ${isBot}`,
        "**Creation**: {userCreation}",
    ].join("\n");
    const formmatedMessage = member_1.memberUtil.formatMessage(member, message);
    const embed = new discord_js_1.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(formmatedMessage)
        .setThumbnail(member.user.avatarURL({ dynamic: true }));
    return embed;
};
exports.getEmbed = getEmbed;
//# sourceMappingURL=get-embed.js.map