"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const format_1 = require("../format");
const time_1 = require("../time");
const formatMessage = (message, text) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const userId = (_a = message.author) === null || _a === void 0 ? void 0 : _a.id;
    const userName = (_b = message.author) === null || _b === void 0 ? void 0 : _b.username;
    const userDiscriminator = (_c = message.author) === null || _c === void 0 ? void 0 : _c.discriminator;
    const userNickname = (_d = message.member) === null || _d === void 0 ? void 0 : _d.displayName;
    const userCreation = ((_e = message.author) === null || _e === void 0 ? void 0 : _e.createdAt)
        ? time_1.timeUtil.getDateFormatted((_f = message.author) === null || _f === void 0 ? void 0 : _f.createdAt)
        : "";
    const serverName = (_g = message.guild) === null || _g === void 0 ? void 0 : _g.name;
    const memberCount = (_h = message.guild) === null || _h === void 0 ? void 0 : _h.memberCount;
    const guildName = (_j = message.guild) === null || _j === void 0 ? void 0 : _j.name;
    return format_1.formatUtil.formatMessage(text, {
        userId,
        userName,
        userDiscriminator,
        userNickname,
        userCreation,
        serverName,
        memberCount,
        guildName,
    });
};
exports.formatMessage = formatMessage;
//# sourceMappingURL=format-message.js.map