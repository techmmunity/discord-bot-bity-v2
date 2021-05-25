"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const format_1 = require("../format");
const time_1 = require("../time");
const formatMessage = (invite, text) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const userId = (_a = invite.inviter) === null || _a === void 0 ? void 0 : _a.id;
    const userName = (_b = invite.inviter) === null || _b === void 0 ? void 0 : _b.username;
    const userDiscriminator = (_c = invite.inviter) === null || _c === void 0 ? void 0 : _c.discriminator;
    const userNickname = "";
    const userCreation = ((_d = invite.inviter) === null || _d === void 0 ? void 0 : _d.createdAt)
        ? time_1.TimeUtil.getDateFormatted((_e = invite.inviter) === null || _e === void 0 ? void 0 : _e.createdAt)
        : "";
    const serverName = (_f = invite.guild) === null || _f === void 0 ? void 0 : _f.name;
    const memberCount = (_g = invite.guild) === null || _g === void 0 ? void 0 : _g.memberCount;
    return format_1.FormatUtil.formatMessage(text, {
        userId,
        userName,
        userDiscriminator,
        userNickname,
        userCreation,
        serverName,
        memberCount,
    });
};
exports.formatMessage = formatMessage;
//# sourceMappingURL=format-message.js.map