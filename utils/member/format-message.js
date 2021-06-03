"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const format_1 = require("../format");
const time_1 = require("../time");
const formatMessage = (member, text) => {
    var _a, _b, _c, _d, _e;
    const userId = (_a = member.user) === null || _a === void 0 ? void 0 : _a.id;
    const userName = (_b = member.user) === null || _b === void 0 ? void 0 : _b.username;
    const userDiscriminator = (_c = member.user) === null || _c === void 0 ? void 0 : _c.discriminator;
    const userNickname = member.displayName;
    const userCreation = ((_d = member.user) === null || _d === void 0 ? void 0 : _d.createdAt)
        ? time_1.timeUtil.getDateFormatted((_e = member.user) === null || _e === void 0 ? void 0 : _e.createdAt)
        : "";
    const serverName = member.guild.name;
    const memberCount = member.guild.memberCount;
    const guildName = member.guild.name;
    return format_1.formatUtil.formatMessage(text, {
        userId,
        userName,
        userDiscriminator,
        userNickname,
        userCreation,
        serverName,
        guildName,
        memberCount,
    });
};
exports.formatMessage = formatMessage;
//# sourceMappingURL=format-message.js.map