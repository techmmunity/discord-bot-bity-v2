"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmbed = void 0;
const discord_js_1 = require("discord.js");
const invite_1 = require("../../../../../utils/invite");
const time_1 = require("../../../../../utils/time");
const getExpiresAt = (invite) => {
    if (invite.expiresAt) {
        return time_1.TimeUtil.getDateFormatted(invite.expiresAt);
    }
    return "--";
};
const isTemporary = (invite) => (invite.expiresAt ? "Yes" : "No");
const getEmbed = ({ invite, title, color }) => {
    var _a;
    const messageToSend = invite_1.InviteUtil.formatMessage(invite, [
        "**Inviter ID**: {userId}",
        "**Inviter Tag**: {userTag}",
        `**Code:** ${invite.code}`,
        `**Temporary:** ${isTemporary(invite)}`,
        `**Expires At:** ${getExpiresAt(invite)}`,
        `**Url:** ${invite.url}`,
    ].join("\n"));
    const embed = new discord_js_1.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(messageToSend)
        .setThumbnail((_a = invite.inviter) === null || _a === void 0 ? void 0 : _a.avatarURL({ dynamic: true }));
    return embed;
};
exports.getEmbed = getEmbed;
//# sourceMappingURL=get-embed.js.map