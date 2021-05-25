"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBot = void 0;
const isBot = async (member) => {
    let memberWithAllInformations = member;
    if (member.partial) {
        memberWithAllInformations = await member.fetch();
    }
    return memberWithAllInformations.user.bot;
};
exports.isBot = isBot;
//# sourceMappingURL=is-bot.js.map