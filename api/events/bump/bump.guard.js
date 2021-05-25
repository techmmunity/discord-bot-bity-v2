"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BumpGuard = void 0;
const bots_1 = require("../../../enums/bots");
class BumpGuard {
    async canActive(_, [context]) {
        const authorId = context.author.id;
        if (this.notIsDisboardBot(authorId))
            return false;
        if (this.notBumpSucess(context.content))
            return false;
        return true;
    }
    notIsDisboardBot(authorId) {
        return authorId !== bots_1.BotsEnum.DISBOARD;
    }
    notBumpSucess(content) {
        const DISBOARD_BUMP_MESSAGE = ":thumbsup:";
        return !content.includes(DISBOARD_BUMP_MESSAGE);
    }
}
exports.BumpGuard = BumpGuard;
//# sourceMappingURL=bump.guard.js.map