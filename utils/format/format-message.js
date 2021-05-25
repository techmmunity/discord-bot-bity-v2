"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const formatMessage = (text, { userId, userName, userCreation, userDiscriminator, userNickname, serverName, memberCount, guildName, }) => text
    .replace(/{userId}/g, userId || "")
    .replace(/{userName}/g, userName || "")
    .replace(/{userCreation}/g, userCreation || "")
    .replace(/{userDiscriminator}/g, userDiscriminator || "")
    .replace(/{userNickname}/g, userNickname || "")
    .replace(/{serverName}/g, serverName || "")
    .replace(/{guildName}/g, guildName || "")
    .replace(/{userMention}/g, userId ? `<@${userId}>` : "")
    .replace(/{memberCount}/g, memberCount ? memberCount.toString() : "")
    .replace(/{userTag}/g, userName && userDiscriminator ? `${userName}#${userDiscriminator}` : "");
exports.formatMessage = formatMessage;
//# sourceMappingURL=format-message.js.map